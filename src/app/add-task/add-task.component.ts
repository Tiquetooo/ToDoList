import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskId: number = 0;

  task: Task = {userId: 0, id: 0, title: '', description: '', completed: false };
  editTask: Task|null = null;

  constructor(private taskService: TaskService, 
              private router: Router, 
              private route:ActivatedRoute
            ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.taskId = this.route.snapshot.params['id'];
      
      this.editTask = this.taskService.getTaskById(this.taskId);
    };
    
  }

  addTask() {
    console.log(this.editTask)
    if(!this.editTask){
      this.task.id = this.taskService.getAllTasks().length + 1;
      this.taskService.addTask(this.task);
    }
    else{
      this.task.id = this.editTask.id;
      this.taskService.updateTask(this.task);
    }
    this.router.navigateByUrl('/list');
  }
}

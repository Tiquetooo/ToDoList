import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor(private taskService: TaskService,
              private router: Router, 
              private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.taskService.removeTask(this.task);
    this.router.navigateByUrl('/list');
  }

}

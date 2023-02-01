import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  Tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.Tasks = this.taskService.getAllTasks();
  }

}

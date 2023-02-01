import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

    tasks: Task[] = [
        {
        userId: 1,
        id: 1,
        title: "Projet 1",
        description: "Implémenter les routes",
        completed: true,
        },
        {
        userId: 1,
        id: 2,
        title: "Projet 2",
        description: "Implémenter les services",
        completed: false,
        },
        {
        userId: 2,
        id: 3,
        title: "Projet 3",
        description: "Implémenter les composants",
        completed: false,
        }
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: number): Task|null {
        let task = null;

        for (var i=0; i<this.tasks.length; i++){
            if (this.tasks[i].id == id){
                task = this.tasks[i]
            }
        }
        return task;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    updateTask(task: Task){
        this.tasks[task.id] = task;
    }
}
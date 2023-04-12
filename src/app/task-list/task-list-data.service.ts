import { Injectable } from '@angular/core';
import { TaskModel } from './task-list.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListDataService {
  tasks!: TaskModel[];
  constructor() {}

  addTask(title: string, description: string) {
    const newTask: TaskModel = {
      title: title,
      description: description,
      id: this.tasks.length + 1,
      status: 'New',
      isCompleted: false,
    };
    this.tasks.push(newTask);
    console.log(this.tasks);
  }

  getTaskList(): TaskModel[] {
    this.tasks = [
      {
        id: 1,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'New',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'OnHold',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'New',
        isCompleted: false,
      },
      {
        id: 4,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'New',
        isCompleted: false,
      },
      {
        id: 5,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'InProgress',
        isCompleted: false,
      },
      {
        id: 6,
        title: 'Need to updated the database',
        description: 'Database Schema is outdated',
        status: 'Completed',
        isCompleted: false,
      },
    ];

    return this.tasks;
  }
}

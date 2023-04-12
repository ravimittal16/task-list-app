import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskModel } from '../task-list.model';
import { TaskListDataService } from '../task-list-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  tasks!: TaskModel[];

  constructor(private _taskListDataService: TaskListDataService) {}

  ngOnInit(): void {
    this.tasks = this._taskListDataService.getTaskList();
  }

  ngOnDestroy() {}

  clearMyTasks() {
    this.tasks = [];
  }
  trackByFn(index: number, item: TaskModel) {
    return item.id;
  }
}

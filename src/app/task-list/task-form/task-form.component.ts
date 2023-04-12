import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskListDataService } from '../task-list-data.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  constructor(private _taskdataService: TaskListDataService) {}

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      const { title, description } = form.value;
      this._taskdataService.addTask(title, description);
    } else {
      form.form.markAllAsTouched();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { RenderAddButtonComponent } from './render-add-button/render-add-button.component';

const _components = [ListComponent, TaskFormComponent];

@NgModule({
  declarations: [..._components, RenderAddButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [..._components],
})
export class TaskListModule {}

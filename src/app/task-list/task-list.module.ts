import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { RenderAddButtonComponent } from './render-add-button/render-add-button.component';
import { TaskFormAdComponent } from './task-form-ad/task-form-ad.component';
import { ErrorWordDirective } from './error-word.directive';
import { SmartFormContainerComponent } from './smart-form-container/smart-form-container.component';
import { GlobalLoginCheckComponent } from './global-login-check/global-login-check.component';
import { CheckboxStateListenerComponent } from '../checkbox-state-listener/checkbox-state-listener.component';

const _components = [
  ListComponent,
  TaskFormComponent,
  TaskFormAdComponent,
  SmartFormContainerComponent,
  GlobalLoginCheckComponent,
  CheckboxStateListenerComponent,
];

@NgModule({
  declarations: [..._components, RenderAddButtonComponent, ErrorWordDirective],
  imports: [CommonModule, FormsModule],
  exports: [..._components],
})
export class TaskListModule {}

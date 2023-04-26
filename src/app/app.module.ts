import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';
import { NamePrefixPipe } from './name-prefix.pipe';
import { TaskFormRcComponent } from './task-form-rc/task-form-rc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NamePrefixPipe, TaskFormRcComponent],
  imports: [BrowserModule, TaskListModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

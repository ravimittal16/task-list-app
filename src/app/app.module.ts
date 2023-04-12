import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

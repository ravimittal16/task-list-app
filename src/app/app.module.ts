import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';
import { NamePrefixPipe } from './name-prefix.pipe';

@NgModule({
  declarations: [AppComponent, NamePrefixPipe],
  imports: [BrowserModule, TaskListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

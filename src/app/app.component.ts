import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-list-app';
  currentDate: Date = new Date();
  isMale = false;
  amount = 234.44445;
  checkboxStateHasChanged($eventArgs: any) {
    console.log('Event Handler from ', $eventArgs);
  }

  changeGender() {
    this.isMale = !this.isMale;
  }
}

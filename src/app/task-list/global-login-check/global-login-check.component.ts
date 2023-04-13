import { Component } from '@angular/core';

@Component({
  selector: 'app-global-login-check',
  templateUrl: './global-login-check.component.html',
  styleUrls: ['./global-login-check.component.scss'],
})
export class GlobalLoginCheckComponent {
  callMyName() {
    console.log('HELLLO FROM GLOBAL CHECK');
  }
}

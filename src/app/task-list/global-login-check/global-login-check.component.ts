import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-global-login-check',
  templateUrl: './global-login-check.component.html',
  styleUrls: ['./global-login-check.component.scss'],
})
export class GlobalLoginCheckComponent implements OnInit {
  @Output() onCheckedChanged: EventEmitter<{
    checked: boolean;
    controlId?: string;
  }> = new EventEmitter<{ checked: boolean; controlId?: string }>();

  ngOnInit(): void {
    this.componentId = uuidv4();
    console.log(this.componentId);
  }

  onCheckboxStateChanged(checked: boolean) {
    if (this.onCheckedChanged) {
      this.onCheckedChanged.emit({ checked, controlId: this.componentId });
    }
  }

  componentId!: string;
  callMyName() {
    console.log('HELLLO FROM GLOBAL CHECK');
  }
}

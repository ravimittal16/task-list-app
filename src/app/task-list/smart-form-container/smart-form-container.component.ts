import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { GlobalLoginCheckComponent } from '../global-login-check/global-login-check.component';

@Component({
  selector: 'app-smart-form-container',
  templateUrl: './smart-form-container.component.html',
  styleUrls: ['./smart-form-container.component.scss'],
})
export class SmartFormContainerComponent implements AfterContentInit, OnInit {
  //===============================================
  // THIS IS GET THE COMPONENT REF FROM NG-CONTENT
  //===============================================
  @ContentChild(GlobalLoginCheckComponent)
  globalLoginCheckComponent!: GlobalLoginCheckComponent;

  @ContentChildren(GlobalLoginCheckComponent)
  allCheckBox!: QueryList<GlobalLoginCheckComponent>;

  ngOnInit(): void {
    console.log('ngOnInit', this.globalLoginCheckComponent);
  }
  //CONTENT-CHILD REF ALWAYS AVAILABLE ON AfterContentInit HOOK
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.globalLoginCheckComponent);
    console.log(this.allCheckBox);
  }

  onButtonClicked() {
    // if (this.globalLoginCheckComponent) {
    //   this.globalLoginCheckComponent.callMyName();
    // }

    this.allCheckBox.forEach((checkComponent) => {
      if (checkComponent) {
        checkComponent.callMyName();
      }
    });
  }
}

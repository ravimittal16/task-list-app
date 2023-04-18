import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { GlobalLoginCheckComponent } from '../global-login-check/global-login-check.component';
import { Subject, takeUntil } from 'rxjs';
import { CheckboxStateListenerComponent } from 'src/app/checkbox-state-listener/checkbox-state-listener.component';

@Component({
  selector: 'app-smart-form-container',
  templateUrl: './smart-form-container.component.html',
  styleUrls: ['./smart-form-container.component.scss'],
})
export class SmartFormContainerComponent
  implements AfterContentInit, OnInit, OnDestroy, AfterViewInit
{
  ngAfterViewInit(): void {
    console.log(this.stateListener);
  }
  //CREATED A SUBJECT TO UN-SUBSCRIBE THE EVENTS
  destroyed$ = new Subject<boolean>();

  @ViewChild('stateListener') stateListener!: CheckboxStateListenerComponent;

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
    this.allCheckBox.forEach((checkComponent) => {
      if (checkComponent) {
        checkComponent.onCheckedChanged
          .pipe(takeUntil(this.destroyed$))
          .subscribe((data) => {
            console.log('Has Watched from Smart Container');
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  onButtonClicked() {
    // if (this.globalLoginCheckComponent) {
    //   this.globalLoginCheckComponent.callMyName();
    // }
  }
}

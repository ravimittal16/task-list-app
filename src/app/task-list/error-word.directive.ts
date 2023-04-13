import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appErrorWord]',
  exportAs: 'errorword',
})
export class ErrorWordDirective implements OnInit {
  @Input()
  set appErrorWord(value: string) {
    console.log(value);
  }

  constructor(private _elementRef: ElementRef) {}

  @HostBinding('style.border')
  border!: string;

  @HostListener('input', ['$event'])
  onInputKeydown(eventArgs: InputEvent) {
    this.border = '';
    const _element = eventArgs.target as HTMLInputElement;
    if (_element && _element.value) {
      if (_element.value === 'error') {
        this.border = '2px solid #DA251C';
      }
    }
  }

  show() {
    window.alert('Alert called');
  }
  hide() {
    console.log('Hide method called');
  }

  ngOnInit(): void {
    console.log(this._elementRef?.nativeElement);
  }
}

import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-product-price-handler',
  templateUrl: './product-price-handler.component.html',
  styleUrls: ['./product-price-handler.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductPriceHandlerComponent),
      multi: true,
    },
  ],
})
export class ProductPriceHandlerComponent
  implements OnInit, ControlValueAccessor
{
  @Input() step!: number;
  value!: number;
  private onTouched!: Function;
  private onModelChanged!: Function;
  writeValue(obj: any): void {
    console.log(obj);
    this.value = obj as number;
  }
  registerOnChange(fn: any): void {
    this.onModelChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  onDecrementClicked() {
    this.value -= this.step ?? 5;
    this.onModelChanged(this.value);
  }

  onIncrementClicked() {
    this.value += this.step ?? 5;
    this.onModelChanged(this.value);
  }

  ngOnInit(): void {}
}

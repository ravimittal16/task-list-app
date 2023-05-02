import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'app-task-form-rc',
  templateUrl: './task-form-rc.component.html',
  styleUrls: ['./task-form-rc.component.scss'],
})
export class TaskFormRcComponent implements OnInit {
  taskFormGroup!: FormGroup;
  products!: any;
  products$!: Observable<any>;
  private _restrictedNames = [
    'city',
    'you',
    'user',
    'todo',
    'product',
    'control',
    'name',
  ];

  constructor(private _fb: FormBuilder, private _httpClient: HttpClient) {}

  private checkUniqueProductName(controlRef: AbstractControl | null) {
    console.log(controlRef?.value);
    return new Promise((resolve) => {
      setTimeout(() => {
        var controlVal = controlRef?.value;
        if (controlVal && this._restrictedNames.indexOf(controlVal) > -1) {
          return resolve({ hasRestrictedName: true });
        }
        return resolve(null);
      }, 1000);
    });
  }

  //this will return me the Form Array Field Controls

  get productTagsRef() {
    return (this.taskFormGroup.get('productTags') as FormArray).controls;
  }

  isTouched(fieldName: string) {
    const isTocuched = this.taskFormGroup.get(fieldName)?.touched;
    return isTocuched;
  }
  isRequired(fieldName: string, errorKey: string) {
    const _fieldField = this.taskFormGroup.get(fieldName);
    return _fieldField?.hasError(errorKey) && _fieldField.dirty;
  }

  addProductTagControl() {
    const _tagFormGroup = this._fb.group({
      productTag: [''],
    });
    this.productTagsRef.push(_tagFormGroup);
  }

  onSubmitForm() {
    const _formValue = this.taskFormGroup.getRawValue();
    console.log(_formValue);
  }

  private _getProducts() {
    this.products$ = this._httpClient.get('https://fakestoreapi.com/products');
  }

  ngOnInit() {
    this._initFormGroup();
    this._getProducts();
    //If you want to watch the values changes on your formgroup, you can do like below snippet
    this.taskFormGroup.valueChanges
      .pipe(debounceTime(1000)) //debounceTime is from rxjs
      .subscribe((newValues) => {
        console.log(newValues);
      });
  }
  //productTags = [{productTag:'HELLO'},{productTag:'Low Inventory'}]
  private _initFormGroup() {
    this.taskFormGroup = this._fb.group({
      productName: [
        '',
        [Validators.required],
        [this.checkUniqueProductName.bind(this)],
      ],
      description: [''],
      productTags: this._fb.array([]),
      productPrice: [5],
      productPriceOne: [15],
      selectedProduct: [null],
    });
  }
}

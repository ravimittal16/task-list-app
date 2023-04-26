import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-task-form-rc',
  templateUrl: './task-form-rc.component.html',
  styleUrls: ['./task-form-rc.component.scss'],
})
export class TaskFormRcComponent implements OnInit {
  taskFormGroup!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  //this will return me the Form Array Field Controls

  get productTagsRef() {
    return (this.taskFormGroup.get('productTags') as FormArray).controls;
  }

  isTouched(fieldName: string) {
    const isTocuched = this.taskFormGroup.get(fieldName)?.touched;
    return isTocuched;
  }
  isRequired(fieldName: string) {
    const _fieldField = this.taskFormGroup.get(fieldName);
    return _fieldField?.hasError('required') && _fieldField.dirty;
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

  ngOnInit(): void {
    this._initFormGroup();
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
      productName: ['', [Validators.required]],
      description: [''],
      productTags: this._fb.array([]),
    });
  }
}

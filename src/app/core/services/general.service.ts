import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  setFormatDate(formGroup: FormGroup, controlName: string) {
    var dateFormat = formatDate(formGroup.get(controlName)?.value, 'yyyy-MM-dd', 'en')
    formGroup.get(controlName)?.patchValue(dateFormat)
  }

  validateChecbox(formGroup: FormGroup) {

    for (const control in formGroup.controls) {
      if (formGroup.get(control)?.value == null) {
        formGroup.get(control)?.setValue(false)
      }
    }
  }

  enableControls(formGroup: FormGroup, excepciones?: string[]) {
    for (const control in formGroup.controls) {
      if (!excepciones?.find((item) => item == control)) {
        formGroup.get(control)?.enable()
      }
    }
  }

  disabledControls(formGroup: FormGroup, excepciones?: string[]) {
    for (const control in formGroup.controls) {

      if (!excepciones?.find((item) => item == control)) {
        formGroup.get(control)?.disable()
        formGroup.get(control)?.setValue(null);
        formGroup.updateValueAndValidity();
      }
    }
  }



}

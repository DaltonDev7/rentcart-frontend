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

  isValidCedula(str:string) {

    var regex = new RegExp("^[0-9]{3}-?[0-9]{7}-?[0-9]{1}$");

    if (!regex.test(str)) {
      return false;
    }

    str = str.replace(/-/g, '');
    return this.CheckDigit(str);
  }

  CheckDigit(str:string) {
    var sum = 0;
    for (var i = 0; i < 10; ++i) {
      var n = ((i + 1) % 2 != 0 ? 1 : 2) * parseInt(str.charAt(i));
      sum += (n <= 9 ? n : n % 10 + 1);
    }
    var dig = ((10 - sum % 10) % 10);

    return dig == parseInt(str.charAt(10));
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

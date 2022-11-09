import {Injectable} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {
  constructor() {
  }

  public validateForm(formGroup: FormGroup, validationMessages: any): void {
    for (const validationMessage in validationMessages) {
      const splitedMessage = validationMessage.split('.');
      if (splitedMessage.length > 1) {
        ValidationServiceService.getValidationControlFromArray(formGroup, validationMessage)!.setErrors(validationMessages[validationMessage]);
      } else {
        if (formGroup.controls[validationMessage]) {
          formGroup.controls[validationMessage].setErrors(validationMessages[validationMessage]);
        }
      }
    }
  }

  private static getValidationControlFromArray(formGroup: FormGroup, validationMessage: string): FormGroup | FormArray | undefined {
    const splitedMessage = validationMessage.split('.');
    const abstractControl = formGroup.get(splitedMessage[0]);
    if (abstractControl instanceof FormGroup) {
      return (abstractControl).get(splitedMessage[1]) as FormGroup;
    }
    if (abstractControl instanceof FormArray) {
      return (abstractControl.at(Number(splitedMessage[1]))).get(splitedMessage[2]) as FormArray;
    }
    return undefined;
  }

}

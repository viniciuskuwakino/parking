import { FormGroup } from '@angular/forms';

export class FormValidatorBase {
  parkingForm: FormGroup;
  submitted: boolean;

  constructor() {
    this.submitted = false;
  }

  get form() {
    return this.parkingForm.controls;
  }
}

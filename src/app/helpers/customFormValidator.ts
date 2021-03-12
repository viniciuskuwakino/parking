import { FormGroup } from '@angular/forms';

export class FormValidatorBase {
  parkingEnterForm: FormGroup;
  parkingExitForm: FormGroup;

  submitted: boolean;

  constructor() {
    this.submitted = false;
  }

  get enterForm() {
    return this.parkingEnterForm.controls;
  }

  get exitForm() {
    return this.parkingExitForm.controls;
  }
}

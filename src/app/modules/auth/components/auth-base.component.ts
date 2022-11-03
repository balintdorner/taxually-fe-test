import { FormGroup } from "@angular/forms";

export abstract class AuthBaseComponent {
  form!: FormGroup;
  passwordPatternErrorMessage: string = 'Password must contain at least one uppercase, one lowercase, one number and a special char! Min length 8 chars';
  get passwordPatternError() {
    return (
      this.form.controls['password'].getError('pattern') &&
      this.form.get('password')?.touched
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidators } from 'src/app/shared/custom-validators/custom.validators';
import { RegexpHelper } from 'src/app/shared/helpers/regexp.helpers';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  passwordPatternErrorMessage: string = 'Password must contain at least one uppercase, one lowercase, one number and a special char! Min length 8 chars';
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _auth: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(RegexpHelper.password)]],
      confirmPassword: [null, [Validators.required, Validators.pattern(RegexpHelper.password)]]
    }, [CustomValidators.match('password', 'confirmPassword')]);
  }

  onSubmit(): void {
    this._auth.register(this.form.value);
  }

  get passwordPatternError() {
    return (
      this.form.controls['password'].getError('pattern') &&
      this.form.get('password')?.touched
    );
  }
}

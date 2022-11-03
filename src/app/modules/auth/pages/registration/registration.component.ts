import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidators } from 'src/app/shared/custom-validators/custom.validators';
import { RegexpHelper } from 'src/app/shared/helpers/regexp.helpers';
import { AuthBaseComponent } from '../../components/auth-base.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends AuthBaseComponent implements OnInit {
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _auth: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(RegexpHelper.password)]],
      confirmPassword: [null, [Validators.required, Validators.pattern(RegexpHelper.password)]]
    }, [CustomValidators.match('password', 'confirmPassword')]);
  }

  onSubmit(): void {
    this._auth.register(this.form.value);
  }
}

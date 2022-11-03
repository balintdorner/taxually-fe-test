import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, pipe } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegexpHelper } from 'src/app/shared/helpers/regexp.helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(RegexpHelper.password)]],
    })
  }

  onSubmit(): void {
    this._auth.login(this.form.value)
      .pipe(
        catchError(err => {
          throw 'Details: ' + err;
        })
      )
      .subscribe(x => console.log(x));
  }

  get passwordPatternError() {
    return (
      this.form.controls['password'].getError('pattern') &&
      this.form.get('password')?.touched
    );
  }

}

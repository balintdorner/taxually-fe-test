import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, pipe, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegexpHelper } from 'src/app/shared/helpers/regexp.helpers';
import { AuthBaseComponent } from '../../components/auth-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthBaseComponent implements OnInit, OnDestroy {
  private unSubscribe = new Subject();

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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(RegexpHelper.password)]],
    })
  }

  onSubmit(): void {
    this._auth.login(this.form.value)
      .pipe(
        takeUntil(this.unSubscribe),
        catchError(err => {
          throw 'Details: ' + err;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unSubscribe.next(true);
    this.unSubscribe.complete();
  }
}

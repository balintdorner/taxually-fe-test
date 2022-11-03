import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taxually-fe-test';

  constructor(
    private readonly _auth: AuthService
  ) {}

  ngOnInit(): void {
    this._auth.loginWithLocalUser();
  }
}

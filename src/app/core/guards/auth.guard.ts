import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private readonly _auth: AuthService,
    private readonly _router: Router
  ) { }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.loggedInUser$.value) {

      return true;
    }

    this.navigateToLogin();
    return false;
  }

  private navigateToLogin(): void {
    this._router.navigate(['/auth/login'])
      .catch((e: any) => console.error(e));
  }
}

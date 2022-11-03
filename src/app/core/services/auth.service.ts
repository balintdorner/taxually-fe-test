import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registeredUserLocalStorageKey = 'registeredUser';
  private readonly userLocalStorageKey = 'user';

  readonly loggedInUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  constructor() { }

  register(user: UserModel): void {
    this.removeRegisteredUserFromLocalStorate();
    this.storeRegisteredInLocalStorage(user);
  }

  login(loginCredentials: UserModel): Observable<UserModel> {
    const user: UserModel | null = this.readFromLocalStorage(this.registeredUserLocalStorageKey);
    if (user == null) {
      const err = new Error('User not found'); 
      return throwError(() => err);
    }

    if (this.matchPassword(loginCredentials, user)) {
      const err = new Error('Invalid credentials'); 
      return throwError(() => err);
    }

    this.finishLogin(user);
    return of(user);
  }

  loginWithLocalUser(): void {
    const user: UserModel | null = this.readFromLocalStorage(this.userLocalStorageKey);
    if (user) {
      this.setLoggedInUser(user);
    }
  }

  private removeRegisteredUserFromLocalStorate(): void {
    localStorage.removeItem(this.registeredUserLocalStorageKey);
  }

  private storeRegisteredInLocalStorage(user: UserModel): void {
    localStorage.setItem(this.registeredUserLocalStorageKey, JSON.stringify(user));
  }

  private readFromLocalStorage(storageKey: string): UserModel | null {
    const userToParse = localStorage.getItem(storageKey);
    if (userToParse === null) {
      return null;
    }

    const user = JSON.parse(userToParse);

    if (!this.isInstanceOfLoggedInUser(user)) {
      return null;
    }

    return user;
  }

  private matchPassword(loginCredentials: UserModel, user: UserModel): boolean {
    return (loginCredentials.password !== user.password ||
    loginCredentials.email !== user.email)
  }

  private finishLogin(user: UserModel): UserModel {
    this.setLoggedInUser(user);
    this.storeLoggedInUserInLocalStorage(user);

    return user;
  }

  private setLoggedInUser(user: UserModel): void {
    this.loggedInUser$.next(user);
  }

  private storeLoggedInUserInLocalStorage(user: UserModel): void {
    localStorage.setItem(this.userLocalStorageKey, JSON.stringify(user));
  }

  private isInstanceOfLoggedInUser(object: any): object is UserModel {
    if (!object) {
      return false;
    }

    return 'email' in object;
  }


}

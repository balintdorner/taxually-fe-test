import { Injectable } from '@angular/core';

import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registeredUserLocalStorageKey = 'registeredUser';

  constructor() { }

  register(user: UserModel): void {
    this.removeRegisteredUserFromLocalStorate();
    this.storeRegisteredInLocalStorage(user);
  }

  private removeRegisteredUserFromLocalStorate(): void {
    localStorage.removeItem(this.registeredUserLocalStorageKey);
  }

  private storeRegisteredInLocalStorage(user: UserModel): void {
    localStorage.setItem(this.registeredUserLocalStorageKey, JSON.stringify(user));
  }


}

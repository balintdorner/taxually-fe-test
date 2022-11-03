import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private readonly _snackBar: MatSnackBar
    
  ) { }

  handle200status(): void {
    this._snackBar.open('Done', 'Close', {duration: 5000});
  }

  handleError(error: string): void {
    this._snackBar.open(error, 'Close', {duration: 5000, panelClass: 'snackbar-error'});
  }
}

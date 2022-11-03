import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-popup',
  templateUrl: './confirm-delete-popup.component.html',
  styleUrls: ['./confirm-delete-popup.component.scss']
})
export class ConfirmDeletePopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: File,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

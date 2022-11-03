import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/services/auth.service';
import { FileHandlerService } from 'src/app/core/services/file-handler.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { ConfirmDeletePopupComponent } from 'src/app/shared/components/confirm-delete-popup/confirm-delete-popup.component';
import { MaterialTableComponent } from 'src/app/shared/components/material-table/material-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource = this._fileHandler.files.value;
  columns = ['name', 'lastModifiedDate', 'size'];
  user = this._auth.loggedInUser$.value?.firstName

  @ViewChild(MaterialTableComponent) table?: MaterialTableComponent;

  constructor(
    public dialog: MatDialog,
    private readonly _fileHandler: FileHandlerService,
    private readonly _auth: AuthService,
    private readonly _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this._auth.logout();
  }

  onUpload(file: File): void {
    this._fileHandler.upload(file);
    this._snackbar.handle200status();
    this.updateTable();
  }

  onDelete(item: File): void {
    const dialog: MatDialogRef<ConfirmDeletePopupComponent> = this.openDialog(item);

    dialog
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._fileHandler.delete(item);
          this._snackbar.handle200status();
          this.updateTable();
        }
      });
  }

  private openDialog(file: File): MatDialogRef<ConfirmDeletePopupComponent> {
    const dialog = this.dialog.open(ConfirmDeletePopupComponent, {
      width: '500px',
      data: file,
    });

    return dialog;
  }

  private updateTable(): void {
    if (this.table) {
      this.table.update(this._fileHandler.files.value)
    }
  }
}

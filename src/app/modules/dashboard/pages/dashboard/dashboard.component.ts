import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileHandlerService } from 'src/app/core/services/file-handler.service';
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

  @ViewChild(MaterialTableComponent) table?: MaterialTableComponent;


  constructor(
    public dialog: MatDialog,
    private readonly _fileHandler: FileHandlerService
  ) { }

  ngOnInit(): void {
  }

  onUpload(file: File) {
    this._fileHandler.upload(file);
    this.updateTable();
  }

  onDelete(item: File) {
    const dialog: MatDialogRef<ConfirmDeletePopupComponent> = this.openDialog(item);

    dialog
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this._fileHandler.delete(item);
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

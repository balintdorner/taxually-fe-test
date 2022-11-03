import { Component, OnInit, ViewChild } from '@angular/core';
import { FileHandlerService } from 'src/app/core/services/file-handler.service';
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
    private readonly _fileHandler: FileHandlerService
  ) { }

  ngOnInit(): void {
  }

  onUpload(file: File) {
    this._fileHandler.upload(file);
    this.updateTable();
  }

  onDelete(item: File) {
    this._fileHandler.delete(item);
    this.updateTable();
  }

  private updateTable(): void {
    if(this.table) {
      this.table.update(this._fileHandler.files.value)
    }
  }
}

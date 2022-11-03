import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Output() readonly upload: EventEmitter<any> = new EventEmitter<any>();

  file?: File;

  constructor() { }

  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.upload.emit(this.file);
  }

}

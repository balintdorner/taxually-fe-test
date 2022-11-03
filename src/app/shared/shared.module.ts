import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MaterialModule } from './modules/material.module';



@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FileUploadComponent
  ]
})
export class SharedModule { }

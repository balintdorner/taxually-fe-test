import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MaterialModule } from './modules/material.module';
import { MaterialTableComponent } from './components/material-table/material-table.component';



@NgModule({
  declarations: [
    FileUploadComponent,
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FileUploadComponent,
    MaterialTableComponent
  ]
})
export class SharedModule { }

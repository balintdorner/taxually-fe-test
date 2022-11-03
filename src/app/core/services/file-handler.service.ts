import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {
  files: BehaviorSubject<Array<File>> = new BehaviorSubject<Array<File>>(new Array());
  constructor() { }

  upload(file: File): void {
    this.files.next([...this.files.getValue(), file]);
  }

  delete(file: File): void {
    this.files.next(this.files.getValue().filter(x => x.name !== file.name))
  }
}

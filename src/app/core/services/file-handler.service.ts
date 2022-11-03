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

  delete(item: any): void {
    this.files.next(this.files.getValue().filter(x => x.name !== item.name))
  }
}

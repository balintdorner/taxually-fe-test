import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @Input() items?: Array<any>;
  datasource = new MatTableDataSource();
  displayedColumns?: Array<string>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  @Output() readonly delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit(): void {
    this.getColumns();
    this.setDataSource(this.items);
  }

  ngAfterViewInit() {
    this.setSort();
    this.setPagination();
  }

  onClick(item: any): void {
    this.delete.emit(item);
  }

  private getColumns(): void {
    if(!this.items || this.items?.length < 1) {
      throw new Error('Invalid data');
    }
    this.displayedColumns = Object.keys(this.items[0]);
  }

  private setDataSource(data: any) {
    this.datasource.data = data;
  }

  private setSort() {
    if (this.sort) {
      this.datasource.sort = this.sort;
    }
  }

  private setPagination() {
    if (this.paginator) {
      this.datasource.paginator = this.paginator;
    }
  }
}

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
  @Input() displayedColumns?: Array<string>;
  datasource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  @Output() readonly delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit(): void {
    this.setDataSource(this.items);
  }

  ngAfterViewInit() {
    this.setSort();
    this.setPagination();
  }

  onClick(item: any): void {
    this.delete.emit(item);
  }

  update(items: Array<any>): void {
    this.setDataSource(items);
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

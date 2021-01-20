import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  items: any[] = [];
  @Input()
  pageSize: number;
  @Input()
  pageSizeOptions: number[];

  @Output()
  paginationAction: EventEmitter<any> = new EventEmitter();

  pageSlice: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  OnPageChange(event): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
    this.paginationAction.emit(this.pageSlice);
  }
}

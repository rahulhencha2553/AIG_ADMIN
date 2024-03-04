import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageRequest } from '../../models/page-request';
import { PaginationManager } from '../../models/pagination-manager';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  ngOnInit(): void {}

  @Input() pageManager!: PaginationManager;
  @Input() pageRequest!: PageRequest;
  @Input() data: any;
  @Output() eventEmit = new EventEmitter<any>();

  public manageNext(isNext: any) {
    let i = 0;
    if (isNext) i = this.pageRequest.pageNo + 1;
    else i = this.pageRequest.pageNo - 1;
    if (i >= 0 && i < this.pageManager.totalPages) this.setPage(i);
  }

  setPage(pageNumber: any) {
    if (pageNumber !== this.pageRequest.pageNo) {
      this.pageRequest.pageNo = pageNumber;
      this.getAllData();
    }
  }

  getAllData() {
    this.eventEmit.emit();
  }
}

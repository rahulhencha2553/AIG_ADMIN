import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CommonDataTableComponent } from './components/common-data-table/common-data-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    CommonDataTableComponent,
    PaginationComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    CommonDataTableComponent,
    PaginationComponent,
    DeleteModalComponent
  ]
})
export class SharedModule { }

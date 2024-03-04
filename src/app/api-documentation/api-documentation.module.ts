import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDocumentationRoutingModule } from './api-documentation-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PlansComponent } from './components/plans/plans.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    PartnersComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    ApiDocumentationRoutingModule,
    SharedModule
  ]
})
export class ApiDocumentationModule { }

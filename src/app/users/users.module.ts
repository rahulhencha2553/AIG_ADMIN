import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTransactionComponent } from './components/user-transaction/user-transaction.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserAnalyticsComponent } from './components/user-analytics/user-analytics.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { VerificationPortalModule } from '../verification-portal/verification-portal.module';
import { VerificationOfficerModule } from '../verification-officer/verification-officer.module';
import { ApiDocumentationModule } from '../api-documentation/api-documentation.module';
import { EmergencyModule } from '../emergency/emergency.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserTransactionComponent,
    UserAddressComponent,
    UserAnalyticsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  exports : [
    UserListComponent,
    UserAddressComponent
  ]
})
export class UsersModule { }

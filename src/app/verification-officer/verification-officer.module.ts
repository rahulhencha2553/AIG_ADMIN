import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationOfficerRoutingModule } from './verification-officer-routing.module';
import { AddressVerificationRequestsComponent } from './components/address-verification-requests/address-verification-requests.component';
import { VerificationOfficerComponent } from './components/verification-officer/verification-officer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddressVerificationRequestsComponent,
    VerificationOfficerComponent
  ],
  imports: [
    CommonModule,
    VerificationOfficerRoutingModule,
    SharedModule
  ]
})
export class VerificationOfficerModule { }

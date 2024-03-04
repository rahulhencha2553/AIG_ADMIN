import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationPortalRoutingModule } from './verification-portal-routing.module';
import { VerificationPortalComponent } from './components/verification-portal/verification-portal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VerificationPortalComponent
  ],
  imports: [
    CommonModule,
    VerificationPortalRoutingModule,
    SharedModule
  ]
})
export class VerificationPortalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRoutingModule } from './emergency-routing.module';
import { EmergencyRequestsComponent } from './components/emergency-requests/emergency-requests.component';
import { EmergencyOfficerComponent } from './components/emergency-officer/emergency-officer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmergencyRequestsComponent,
    EmergencyOfficerComponent
  ],
  imports: [
    CommonModule,
    EmergencyRoutingModule,
    SharedModule
  ]
})
export class EmergencyModule { }

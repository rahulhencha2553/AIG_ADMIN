import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutes } from '../shared/utils/components-routes';
import { VerificationOfficerComponent } from './components/verification-officer/verification-officer.component';
import { AddressVerificationRequestsComponent } from './components/address-verification-requests/address-verification-requests.component';

const routes: Routes = [
  {
    path:ComponentsRoutes.VERIFICATION_OFFICER_LIST,
    component:VerificationOfficerComponent,
    pathMatch:'full'
  },
  {
    path:ComponentsRoutes.VERI_OFFI_ADDRESS_VERIFICATION_REQ,
    component:AddressVerificationRequestsComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationOfficerRoutingModule { }

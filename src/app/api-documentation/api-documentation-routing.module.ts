import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutes } from '../shared/utils/components-routes';
import { UsersComponent } from './components/users/users.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PlansComponent } from './components/plans/plans.component';

const routes: Routes = [
  {
    path:ComponentsRoutes.API_DOC_USERS,
    component:UsersComponent,
    pathMatch:'full'
  },
  {
    path:ComponentsRoutes.API_DOC_PARTNERS,
    component:PartnersComponent,
    pathMatch:'full'
  },
  {
    path:ComponentsRoutes.API_DOC_PLANS,
    component:PlansComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiDocumentationRoutingModule { }

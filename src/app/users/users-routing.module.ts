import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTransactionComponent } from './components/user-transaction/user-transaction.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserAnalyticsComponent } from './components/user-analytics/user-analytics.component';
import { ComponentsRoutes } from '../shared/utils/components-routes';

const routes: Routes = [
  {
    path: ComponentsRoutes.USER_LIST,
    component:UserListComponent,
    pathMatch:'full'
  },
  {
    path: ComponentsRoutes.USER_TRANSACTION,
    component:UserTransactionComponent,
    pathMatch:'full'
  },
  {
    path: ComponentsRoutes.USER_ADDRESS,
    component:UserAddressComponent,
    pathMatch:'full'
  },
  {
    path: ComponentsRoutes.USER_ANALYTICS,
    component:UserAnalyticsComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

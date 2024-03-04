import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutes } from './shared/utils/components-routes';
import { AuthenticationComponent } from './authentication/components/authentication/authentication.component';

const routes: Routes = [
  {
    path:'',
    component:AuthenticationComponent,
    pathMatch:'full'
  },
  {
    path: ComponentsRoutes.ADMIN_HOME,
    loadChildren: () =>
      import('./admin-home/admin-home.module').then((m) => m.AdminHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

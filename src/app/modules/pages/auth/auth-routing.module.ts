import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuard } from '@core/guards/unauth/unauth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@modules/pages/auth/login/login.module').then(m => m.LoginModule),
    canActivate: [UnauthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

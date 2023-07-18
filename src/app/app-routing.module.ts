import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', loadChildren: () => import('@modules/pages/auth/auth.module').then(m=>m.AuthModule) },
      { path: '', loadChildren: () => import('@modules/pages/templates/templates.module').then(m=>m.TemplatesModule) },
    ]
  },
  { path: '**', pathMatch:'full', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

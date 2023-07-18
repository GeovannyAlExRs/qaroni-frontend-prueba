import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'forms', loadChildren: () => import('@modules/pages/templates/forms/forms.module').then(m => m.FormsModule)},
  { path: 'groups', loadChildren: () => import('@modules/pages/templates/groups/groups.module').then(m => m.GroupsModule)},
  { path: '404', loadChildren: () => import('@modules/pages/templates/not-found/not-found.module').then(m => m.NotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

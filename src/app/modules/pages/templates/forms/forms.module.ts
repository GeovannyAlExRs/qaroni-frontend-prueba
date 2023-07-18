import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,

    CardHeaderGenericModule,
  ]
})
export class FormsModule { }

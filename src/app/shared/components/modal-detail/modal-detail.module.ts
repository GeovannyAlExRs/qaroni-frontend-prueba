import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDetailComponent } from './modal-detail.component';
import { CardListModule } from '../card-list/card-list.module';

@NgModule({
  declarations: [
    ModalDetailComponent
  ],
  imports: [
    CommonModule,

    CardListModule
  ],
  exports: [
    ModalDetailComponent
  ]
})
export class ModalDetailModule { }

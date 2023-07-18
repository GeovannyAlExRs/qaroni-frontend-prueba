import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,

    MatDialogModule,
  ],
  exports: [
    CardListComponent,

    MatDialogModule
  ]
})
export class CardListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SearchModule } from '@shared/pipe/search/search.module';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,

    MatDialogModule,

    SearchModule
  ],
  exports: [
    CardListComponent,

    MatDialogModule
  ]
})
export class CardListModule { }

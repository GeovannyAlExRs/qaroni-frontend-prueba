import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SearchModule } from '@shared/pipe/search/search.module';
import { ImgBrokenModule } from '@shared/directives/img-broken/img-broken.module';

@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,

    MatDialogModule,

    SearchModule,
    ImgBrokenModule,
  ],
  exports: [
    CardListComponent,

    MatDialogModule
  ]
})
export class CardListModule { }

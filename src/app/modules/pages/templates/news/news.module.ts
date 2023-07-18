import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';
import { CardListModule } from '@shared/components/card-list/card-list.module';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,

    CardHeaderGenericModule,
    CardListModule,
  ]
})
export class NewsModule { }

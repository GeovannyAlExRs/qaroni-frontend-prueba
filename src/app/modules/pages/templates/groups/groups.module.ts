import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';

import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';
import { CardListModule } from '@shared/components/card-list/card-list.module';

@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,

    CardHeaderGenericModule,
    CardListModule,
  ]
})
export class GroupsModule { }

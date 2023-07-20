import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects, reducers } from '@modules/pages/templates/store/data.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplatesRoutingModule,

    StoreModule.forFeature('news', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class TemplatesModule { }

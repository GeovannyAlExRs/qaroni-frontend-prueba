import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderGenericComponent } from './card-header-generic.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardHeaderGenericComponent
  ],
  imports: [
    CommonModule,

    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [
    CardHeaderGenericComponent
  ]
})
export class CardHeaderGenericModule { }

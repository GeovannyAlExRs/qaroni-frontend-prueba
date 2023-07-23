import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormPersonModule } from '@shared/components/form/form-person/form-person.module';
import { FormChildrenModule } from '@shared/components/form/form-children/form-children.module';
import { FormFilmsModule } from '@shared/components/form/form-films/form-films.module';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,

    CardHeaderGenericModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,

    FormPersonModule,
    FormChildrenModule,
    FormFilmsModule
  ]
})
export class FormsParentModule { }

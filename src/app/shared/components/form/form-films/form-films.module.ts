import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFilmsComponent } from './form-films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FormFilmsComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    FormFilmsComponent
  ]
})
export class FormFilmsModule { }

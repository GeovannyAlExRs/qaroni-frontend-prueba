import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersonComponent } from './form-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FormPersonComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    FormPersonComponent
  ]
})
export class FormPersonModule { }

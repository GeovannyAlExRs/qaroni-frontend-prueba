import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormChildrenComponent } from './form-children.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    FormChildrenComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    FormChildrenComponent
  ]
})
export class FormChildrenModule { }

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  @Input() formPerson: FormGroup = new FormGroup({});

  constructor(){}

  ngOnInit(): void {}

  getErrorMessage(options: string): string {
    if(options==='email' && this.formPerson.get(options)?.hasError('email')) {
      return'Not a valid email'
    }

    return this.formPerson.get(options)?.hasError('required') ? 'Required ' + options : ''
  }
}

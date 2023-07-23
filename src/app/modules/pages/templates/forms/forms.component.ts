import { formatDate } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Parent } from '@core/models/forms.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{//, OnChanges {

  options: Array<any> = []
  title: string = 'User Form'
  subtitle: string = 'This information will be displayed publicly so be careful what you share.'

  anio: number = 17

  //listCountry: Array<string> = ['Argentina', 'Brasil', 'Colombia', 'Ecuador', 'España', 'Francia', 'Alemania', 'Portugal'];

  public formParent: FormGroup = new FormGroup({});
  public formChildren: FormGroup = new FormGroup({});
  public formFilms: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {list: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'), icon: 'uil uil-calender'},
      {list: 'New register', icon: 'uil uil-user-plus'}
    ]

    this.initFormParents()
  }

  initFormParents() : void {
    this.formParent = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', ),
      children: new FormArray([]),
      films: new FormArray([])
    })
  }

  addChildren() : void {
    this.formChildren = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.max(this.anio)]),
    })

    const referenceChildren = this.formParent.get('children') as FormArray
    referenceChildren.push(this.formChildren)
  }

  removeChildren(index: number) : void {
    const referenceChildren = this.formParent.get('children') as FormArray
    referenceChildren.removeAt(index)
  }

  addFilms() : void {
    this.formFilms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.max(new Date().getFullYear())]),
      award: new FormControl(false, []),
    })

    console.log('Agregando peliculas...');
    const referenceFilms = this.formParent.get('films') as FormArray
    referenceFilms.push(this.formFilms)
  }

  removeFilms(index: number) : void {
    const referenceChildren = this.formParent.get('films') as FormArray
    referenceChildren.removeAt(index)
  }

  getCtrl(key: string, formGroup: FormGroup) : any {
    return formGroup.get(key);
  }

  getErrorMessage(options: string): string {
    if(options==='email' && this.formParent.get(options)?.hasError('email')) {
      return'Not a valid email'
    }

    return this.formParent.get(options)?.hasError('required') ? 'Required ' + options : ''
  }

  getErrorMessageChildren(options: string): string {
    if(options==='year' && this.formChildren.get(options)?.hasError('max')) {
      return'only under 18 years old'
    }

    return this.formChildren.get(options)?.hasError('required') ? 'Required ' + options : ''
  }

  getErrorMessageFilms(options: string): string {
    if(options==='year' && this.formFilms.get(options)?.hasError('max')) {
      return'Please enter the correct year'
    }
    return this.formFilms.get(options)?.hasError('required') ? 'Required ' + options : ''
  }

  saveRegister() : void {

    if(this.formParent.invalid) {
      console.error('*** Error saving *** ' + JSON.stringify(this.formParent.value));
      //this.getErrorMessage(this.formParent.controls[FormControl.name].value)
      return;
    }

    console.log('Save: ' + JSON.stringify(this.formParent.value));

  }
}

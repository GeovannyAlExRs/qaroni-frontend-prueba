import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-films',
  templateUrl: './form-films.component.html',
  styleUrls: ['./form-films.component.scss']
})
export class FormFilmsComponent implements OnInit {

  @Input() public formParentFilms: FormGroup = new FormGroup({});
  public formFilms: FormGroup = new FormGroup({});

  anio: number = 17

  constructor(){}

  ngOnInit(): void {}

  getCtrl(key: string, formGroup: FormGroup) : any {
    return formGroup.get(key);
  }


  addFilms() : void {
    this.formFilms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.max(new Date().getFullYear())]),
      award: new FormControl(false, []),
    })

    console.log('Agregando peliculas...');
    const referenceFilms = this.formParentFilms.get('films') as FormArray
    referenceFilms.push(this.formFilms)
  }

  removeFilms(index: number) : void {
    const referenceChildren = this.formParentFilms.get('films') as FormArray
    referenceChildren.removeAt(index)
  }

  getErrorMessageFilms(options: string): string {
    if(options==='year' && this.formFilms.get(options)?.hasError('max')) {
      return'Please enter the correct year'
    }

    return this.formFilms.get(options)?.hasError('required') ? 'Required ' + options : ''
  }
}

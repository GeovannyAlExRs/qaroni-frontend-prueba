import { formatDate } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  options: Array<any> = []
  title: string = 'User Form'
  subtitle: string = 'This information will be displayed publicly so be careful what you share.'

  save: boolean = false

  //mode!: string
  //listCountry: Array<string> = ['Argentina', 'Brasil', 'Colombia', 'Ecuador', 'España', 'Francia', 'Alemania', 'Portugal'];

  public formParent: FormGroup = new FormGroup({});

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

  saveRegister() : void {

    if(this.formParent.valid){
      this.save = true // To view tag <h1>
      console.log('Save: ' + JSON.stringify(this.formParent.value));
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.scss']
})
export class FormChildrenComponent implements OnInit {

  @Input() public formParentChildren: FormGroup = new FormGroup({});
  public formChildren: FormGroup = new FormGroup({});

  anio: number = 17

  constructor(){}

  ngOnInit(): void {}

  getCtrl(key: string, formGroup: FormGroup) : any {
    return formGroup.get(key);
  }

  addChildren() : void {
    this.formChildren = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.max(this.anio)]),
    })

    const referenceChildren = this.formParentChildren.get('children') as FormArray
    referenceChildren.push(this.formChildren)
  }

  removeChildren(index: number) : void {
    const referenceChildren = this.formParentChildren.get('children') as FormArray
    referenceChildren.removeAt(index)
  }

  getErrorMessageChildren(options: string): string {
    if(options==='year' && this.formChildren.get(options)?.hasError('max')) {
      return'only under 18 years old'
    }

    return this.formChildren.get(options)?.hasError('required') ? 'Required ' + options : ''
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromRoot from '@store/store'

import { UserNamePasswordCredentials } from '@store/users/users.store.interfaces'
import { SignInUsername } from '@store/users/users.store.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({})

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.formParent = new FormGroup({
      username:  new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
  }

  loginUser() : void {

    if (this.formParent.valid) {
      const userLoginRequest: UserNamePasswordCredentials = {
        username: this.formParent.value.username,
        password: this.formParent.value.password
      }


      this.store.dispatch(new SignInUsername(userLoginRequest))
      console.log("Sing in correct...");
      console.log("STORE: ", this.store);
    }


    /*if (this.formParent.invalid) {
      console.log("Ingrese los campos de usuario requeridos*");
    } else {
      console.log("Campos ingresados* " + this.formParent.value);
    }*/

  }

  getErrorMessage(options: string): string {
    if(options==='username' && this.formParent.get(options)?.hasError('email')) {
      return'Not a valid email'
    }

    return this.formParent.get(options)?.hasError('required') ? 'Required ' + options : ''
  }

/*
  get(control: string): AbstractControl {
    return this.formParent.get(control) as AbstractControl;
  }*/
}

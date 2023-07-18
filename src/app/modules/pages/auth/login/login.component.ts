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

  //public formParent: FormGroup = new FormGroup({})

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    /*this.formParent = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    });*/
  }

  loginUser(form: NgForm) : void {

    /*if (!form.invalid) {
    console.error("Ingrese los campos");
    }*/

    const userLoginRequest: UserNamePasswordCredentials = {
      username: form.value.username,
      password: form.value.password
    }

    this.store.dispatch(new SignInUsername(userLoginRequest))
    console.log("STORE: ", this.store);

    /*if (this.formParent.invalid) {
      console.log("Ingrese los campos de usuario requeridos*");
    } else {
      console.log("Campos ingresados* " + this.formParent.value);
    }*/

    console.log("Clic...");
  }

/*
  get(control: string): AbstractControl {
    return this.formParent.get(control) as AbstractControl;
  }*/
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@store/store'
import { getUser, getIsAuthorized } from '@store/users/users.store.selectors'
import { UsersResponse } from '@store/users/users.store.interfaces'
import { Init ,SignOutUsername } from '@store/users/users.store.actions';
import { TokenService } from '@services/token/token.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'qaroni-frontend-prueba-geovanny';

  users$!: Observable<UsersResponse>
  isAuthorized$!: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(getUser)) as Observable<UsersResponse>
    this.isAuthorized$ = this.store.pipe(select(getIsAuthorized)) as Observable<boolean>

    this.store.dispatch(new Init())

    console.log('APP - USER: ' + this.users$);
  }

  logoutUser(): void {
    this.store.dispatch(new SignOutUsername())
    this.tokenService.removeToken()
    this.router.navigate(['/auth/login'])
  }
}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { environment } from "@env/environment";

import { UsersResponse } from "@store/users/users.store.interfaces";
import * as fromActions from "@store/users/users.store.actions";
import { Users } from "./users.enum";
import { TokenService } from "@services/token/token.service";


type Action = fromActions.All;

@Injectable()
export class UserEffects {

  /* private notification: NotificationService */
  constructor(private httpclient: HttpClient, private actions: Actions,
              private router: Router, private tokenService: TokenService) {}

  // TODO: Login User...
  signInUserName: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(Users.SIGN_IN_USERNAME), // Define excuse of the transaction
    map((action: fromActions.SignInUsername) => action.credentials), // Map from Backend User
    switchMap( userData =>
      this.httpclient.post<UsersResponse>(`${environment.url}merchants/${environment.merchantId}/users/logins`, userData) // invoce la URL
      .pipe(
        tap((response: UsersResponse) => {
          this.tokenService.saveToken(response.result[0].userId, response.result[0].access_token)

          this.router.navigate(['/groups'])

        }),
        // MAP: Crea un envoltorio para transformarlo a un observable
        map((response: UsersResponse) => new fromActions.SignInUsernameSuccess(response.username, response || null)),
        catchError(err => {
          console.log('Credentials are invalid');
          //this.notification.error("Credentials are invalid")
          // OF: Devuelve una instancia Observable
          return of(new fromActions.SignInUsernameError(err.message))
        })
      )
    )
  ))

  // TODO: User it is login
  /*init: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(Users.INIT), // Define excuse of the transaction
    switchMap( async () => this.tokenService.getToken() ), // Get Token
    switchMap( (token, userId) => {
      if(token) {
        console.log('USER EN SESION ===>> ID USER: '+ userId +'*** ===>> TOKEN: ', token);
        return this.httpclient.get<UsersResponse>(`${environment.url}merchants/${environment.merchantId}/users/logins`) // invoce la URL
        .pipe(
          tap((response: UsersResponse) => {
            console.log('BACKEND => DATA USER: ', response);

          }),
          // MAP: Crea un envoltorio para transformarlo a un observable
          map((response: UsersResponse) => new fromActions.InitAuthorized(response.username, response || null)),
          catchError(err => {
            // this.notification.error("Error logging in.")
            // OF: Devuelve una instancia Observable
            return of(new fromActions.InitError(err.message))
          })
        )
      } else {
        return of(new fromActions.InitUnAuthorized())
      }
    }
    )
  ))*/
}

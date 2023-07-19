import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, filter, map, tap } from 'rxjs';

import { getUserState } from '@store/users/users.store.selectors';
import * as fromRoot from '@store/store'
import { TokenService } from '@services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private store: Store<fromRoot.State>, private serviceToken: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkSession();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.checkSession();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.checkSession();
  }

  private checkSession() : boolean {
    console.log('[AUTH] SAVE TOKEN : ' + this.serviceToken.getToken());
    if(!this.serviceToken.getToken()) {
      this.router.navigate(['/auth/login'])
    }
    return true;
  }
}

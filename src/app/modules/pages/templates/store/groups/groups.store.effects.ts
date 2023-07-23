import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators'

import * as fromActions from '@modules/pages/templates/store/groups/groups.store.actions'
import { GroupsResponse } from '@modules/pages/templates/store/groups/groups.store.interfaces'
import { environment } from '@env/environment'
import { Groups } from './groups.enum'
import { TokenService } from '@services/token/token.service'

type Action = fromActions.All

@Injectable()
export class NewsEffects {

  constructor(private actions: Actions, private httpClient: HttpClient,
              private router: Router, private tokenService: TokenService) {}

  // TODO: Read new Groups...
  readGroups: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(Groups.READ_GROUPS),
      switchMap( async () => this.tokenService.getToken()), // Get Token
      switchMap(() =>
        this.httpClient.get<GroupsResponse[]>(`${environment.url}merchants/${environment.merchantId}/news`) // invoce la URL
        .pipe(
          delay(1000),
          map((newslist: GroupsResponse[]) => new fromActions.ReadGroupsSuccess(newslist)),
          catchError(err => of(new fromActions.ReadGroupsError(err.message)))
        )
      )
    )
  )
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators'

import * as fromActions from '@modules/pages/templates/store/news/news.store.actions'
import { NewsResponse } from '@modules/pages/templates/store/news/news.store.interfaces'
import { environment } from '@env/environment'
import { News } from './news.enum'

type Action = fromActions.All

@Injectable()
export class NewsEffects {

  constructor(private actions: Actions, private httpClient: HttpClient, private router: Router) {}

  // TODO: Read new News...
  readNews: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(News.READ_NEWS),
      switchMap(() =>
        this.httpClient.get<NewsResponse[]>(`${environment.url}merchants/${environment.merchantId}/news`) // invoce la URL
        .pipe(
          delay(1000),
          map((newslist: NewsResponse[]) => new fromActions.ReadNewsSuccess(newslist)),
          catchError(err => of(new fromActions.ReadNewsError(err.message)))
        )
      )
    )
  )
}

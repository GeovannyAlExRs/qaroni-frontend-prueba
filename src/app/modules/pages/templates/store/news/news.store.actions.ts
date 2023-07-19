import { Action } from '@ngrx/store'
import { NewsResponse } from '@modules/pages/templates/store/news/news.store.interfaces'
import { News } from './news.enum';


// STATUS READ NEWS
export class ReadNews implements Action {
  readonly type = News.READ_NEWS;
  constructor() {}
}

export class ReadNewsSuccess implements Action {
  readonly type = News.READ_NEWS_SUCCESS;
  constructor(public newslist: NewsResponse[]) {
    console.log('[ACTIONS] News List: ' + newslist);
  }
}

export class ReadNewsError implements Action {
  readonly type = News.READ_NEWS_ERROR;
  constructor(public error: string) {}
}

export type All = ReadNews | ReadNewsSuccess | ReadNewsError;

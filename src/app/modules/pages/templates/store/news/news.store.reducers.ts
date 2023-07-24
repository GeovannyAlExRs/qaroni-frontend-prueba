import { NewsResponse } from "@modules/pages/templates/store/news/news.store.interfaces";
import * as fromActions from "@modules/pages/templates/store/news/news.store.actions";

// DB Local
export interface NewsState {
  newslist: NewsResponse[] | any;
  news: NewsResponse | any;
  loading: boolean | null;
  error: string | null;
}

const initialState: NewsState = {
  newslist: null,
  news: null,
  loading: null,
  error: null,
}

export function reducer(state: NewsState = initialState, action: fromActions.All | any) {
  switch(action.type) {
    case fromActions.ReadNews : return {...state, loading: true, error: null }
    case fromActions.ReadNewsSuccess : return {...state, loading: false, newslist: action.newslist }
    case fromActions.ReadNewsError : return {...state, loading: false, error: action.error }

    default: return state
  }
}

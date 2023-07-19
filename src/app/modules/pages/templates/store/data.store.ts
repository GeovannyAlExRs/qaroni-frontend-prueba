import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import { NewsState, reducer } from "@modules/pages/templates/store/news/news.store.reducers";
import { NewsEffects } from "@modules/pages/templates/store/news/news.store.effects";


export interface NewsListState { list: NewsState }

export const getNewsState = createFeatureSelector<NewsListState>('news')

export const reducers  : ActionReducerMap<NewsListState> = { list: reducer }

export const effects : any = [ NewsEffects ]

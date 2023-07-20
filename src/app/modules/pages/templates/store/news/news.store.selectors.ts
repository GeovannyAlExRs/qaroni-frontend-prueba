import { createSelector } from "@ngrx/store";
import { NewsListState, getNewsState } from "@modules/pages/templates/store/data.store";
import { NewsState } from "@modules/pages/templates/store/news/news.store.reducers";

export const getListNewsState = createSelector(
  getNewsState,
  (state: NewsListState) => state.list
)

export const getLoading = createSelector(
  getListNewsState,
  (state: NewsState) => state.loading
)

export const getAllNews = createSelector(
  getListNewsState,
  (state: NewsState) => state.newslist
)
//console.log('NEWS STORE SELECTORS ' + getAllNews.length );

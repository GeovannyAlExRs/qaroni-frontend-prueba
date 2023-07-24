import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import { NewsState, reducer } from "@modules/pages/templates/store/news/news.store.reducers";
import { NewsEffects } from "@modules/pages/templates/store/news/news.store.effects";

import { GroupsState, reducer as reducerG} from "@modules/pages/templates/store/groups/groups.store.reducers";
import { GroupsEffects } from "@modules/pages/templates/store/groups/groups.store.effects";

// NEWS
export interface NewsListState { list: NewsState }

export const getNewsState = createFeatureSelector<NewsListState>('news')

export const reducers  : ActionReducerMap<NewsListState> = { list: reducer }

export const effects : any = [ NewsEffects ]

//GROUPS
export interface GroupsListState { list: GroupsState }

export const getGroupsState = createFeatureSelector<GroupsListState>('groups')

export const reducerGroup  : ActionReducerMap<GroupsListState> = { list: reducerG }

export const effectsGroup : any = [ GroupsEffects ]

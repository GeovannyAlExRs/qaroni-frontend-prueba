import { createSelector } from "@ngrx/store";

import { GroupsListState, getGroupsState } from "@modules/pages/templates/store/data.store";
import { GroupsState } from "@modules/pages/templates/store/groups/groups.store.reducers";

export const getListGroupsState = createSelector(
  getGroupsState,
  (state: GroupsListState) => state.list
)

export const getLoading = createSelector(
  getListGroupsState,
  (state: GroupsState) => state.loading
)

export const getAllGroups = createSelector(
  getListGroupsState,
  (state: GroupsState) => state.groupslist
)
//console.log('GROUPS STORE SELECTORS ' + getAllGroups.length );

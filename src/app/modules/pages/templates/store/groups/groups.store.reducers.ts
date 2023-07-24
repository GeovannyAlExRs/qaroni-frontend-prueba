import { GroupsResponse } from "@modules/pages/templates/store/groups/groups.store.interfaces";
import * as fromActions from "@modules/pages/templates/store/groups/groups.store.actions";

// DB Local
export interface GroupsState {
  groupslist: GroupsResponse[] | any;
  groups: GroupsResponse | any;
  loading: boolean | null;
  error: string | null;
}

const initialState: GroupsState = {
  groupslist: null,
  groups: null,
  loading: null,
  error: null,
}

export function reducer(state: GroupsState = initialState, action: fromActions.All | any) {
  switch(action.type) {
    case fromActions.ReadGroups : return {...state, loading: true, error: null }
    case fromActions.ReadGroupsSuccess : return {...state, loading: false, groupslist: action.groupslist }
    case fromActions.ReadGroupsError : return {...state, loading: false, error: action.error }

    default: return state
  }
}

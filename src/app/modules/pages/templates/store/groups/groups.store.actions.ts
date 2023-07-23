import { Action } from '@ngrx/store'
import { GroupsResponse } from '@modules/pages/templates/store/groups/groups.store.interfaces'
import { Groups } from './groups.enum';


// STATUS READ GROUPS
export class ReadGroups implements Action {
  readonly type = Groups.READ_GROUPS
  constructor() {}
}

export class ReadGroupsSuccess implements Action {
  readonly type = Groups.READ_GROUPS_SUCCESS;
  constructor(public groupslist: GroupsResponse[]) {
    console.log('[ACTIONS] Groups List: ' + groupslist);
  }
}

export class ReadGroupsError implements Action {
  readonly type = Groups.READ_GROUPS_ERROR;
  constructor(public error: string) {}
}

export type All = ReadGroups | ReadGroupsSuccess | ReadGroupsError;

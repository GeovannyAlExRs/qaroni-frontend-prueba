import { Action } from '@ngrx/store';
import { UserNamePasswordCredentials,UsersResponse } from '@store/users/users.store.interfaces';
import { Users } from './users.enum';


// ***** [ USER INIT SESSION ] *****
export class Init implements Action {
  readonly type = Users.INIT;
  constructor() {}
}

export class InitAuthorized implements Action {
  readonly type = Users.INIT_AUTHORIZED;
  constructor(public username: string, public user: UsersResponse | null) {}
}

export class InitUnAuthorized implements Action {
  readonly type = Users.INIT_UNAUTHORIZED;
  constructor() {}
}

export class InitError implements Action {
  readonly type = Users.INIT_ERROR;
  constructor(public error: string) {}
}

// ***** [ USER LOGIN ] *****
export class SignInUsername implements Action {
  readonly type = Users.SIGN_IN_USERNAME;
  constructor(public credentials: UserNamePasswordCredentials) {}
}

export class SignInUsernameSuccess implements Action {
  readonly type = Users.SIGN_IN_USERNAME_SUCCESS;
  constructor(public username: string, public user: UsersResponse | null) {}
}

export class SignInUsernameError implements Action {
  readonly type = Users.SIGN_IN_USERNAME_ERROR;
  constructor(public error: string) {}
}

// ***** [ USER ] *****
export class SignOutUsername implements Action {
  readonly type = Users.SIGN_OUT_USERNAME;
  constructor() {}
}

export class SignOutUsernameSuccess implements Action {
  readonly type = Users.SIGN_OUT_USERNAME;
  constructor() {}
}

export class SignOutUsernameError implements Action {
  readonly type = Users.SIGN_OUT_USERNAME_ERROR;
  constructor(public error: string) {}
}

export type All = Init | InitAuthorized | InitUnAuthorized | InitError
                  | SignInUsername | SignInUsernameSuccess | SignInUsernameError
                  | SignOutUsername | SignOutUsernameSuccess | SignOutUsernameError;

import { UsersResponse } from "@store/users/users.store.interfaces";
import * as fromActions from "@store/users/users.store.actions";

// DB Local
export interface UserState {
  entity: UsersResponse | null;
  userId: string | null;
  username : string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  userId: null,
  username : null,
  loading: null,
  error: null
}

export function reducer(state = initialState, action: fromActions.All | any) : UserState {
  switch(action.type) {
    // INIT
    case fromActions.Init : return { ...state, loading: true }
    case fromActions.InitAuthorized : return { ...state, loading: false, entity: action.user, username: action.username, error: null }
    case fromActions.InitError : return { ...state, loading: false, entity: null, username: null, error: action.error }
    case fromActions.InitUnAuthorized : return { ...state, loading: false, entity: null, username: null, error: null }

    // LOGIN
    case fromActions.SignInUsername : return { ...state, loading: true, entity: null, username: null, error: null }
    case fromActions.SignInUsernameSuccess : return { ...state, loading: false, entity: action.user, username: action.username, error: null }
    case fromActions.SignInUsernameError : return { ...state, loading: false, entity: null, username: null, error: action.error }

    // LOGOUT
    case fromActions.SignOutUsername : return { ...initialState }
    case fromActions.SignOutUsernameSuccess : return { ...initialState }
    case fromActions.SignOutUsernameError : return { ...state, loading: false, entity: null, username: null, error: action.error }

    default: { return state }
  }
}

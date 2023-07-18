export enum Users {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGN_IN_USERNAME = '[User] Login: Start',
  SIGN_IN_USERNAME_SUCCESS = '[User] Login: Success',
  SIGN_IN_USERNAME_ERROR = '[User] Login: Error',

  SIGN_OUT_USERNAME = '[User] Logout: Start',
  SIGN_OUT_USERNAME_SUCCESS = '[User] Logout: Success',
  SIGN_OUT_USERNAME_ERROR = '[User] Logout: Error',
}

import { Users } from '@core/models/users.model';

export { Users as UsersResponse } from '@core/models/users.model';

export interface UserNamePasswordCredentials {
  username: string;
  password: string;
}

export interface UserRequest extends Users {
  password: string;
}

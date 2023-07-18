export interface Users {
  username: string;
  email: string | null;
  result: UserResult[] | any;

}

interface UserResult {
  userId: number | string;
  access_token: string | any;
  expires: string | null;
  issued: string | null;
}

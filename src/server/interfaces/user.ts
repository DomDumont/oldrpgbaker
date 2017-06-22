export interface IUser {
  username: string;
  password: string;
  email: string;
  role: string;
  comparePassword (pw: any, cb: any);
}
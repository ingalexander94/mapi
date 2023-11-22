export interface UserAuth {
  fullname: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: UserAuth | null;
}

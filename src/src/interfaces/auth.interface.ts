export interface UserAuth {
  fullname: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: UserAuth | null;
}

export interface ForgotResponse {
  ok: boolean;
  error?: string;
}

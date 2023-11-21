export interface UserAuth {
  id: number;
  name: string;
  email: string;
}

export interface AuthState {
  user: UserAuth | null;
  checking: boolean;
}

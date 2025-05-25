export interface LoginData {
  email: string;
  password: string;
}

export interface AuthState {
  loginData: LoginData | null;
  isAuthenticated: boolean;
  intendedRoute: string | null;
  setIntendedRoute: (route: string | null) => void;
  login: (loginData: LoginData) => void;
  logout: () => void;
}

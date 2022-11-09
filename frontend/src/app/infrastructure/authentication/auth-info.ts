export interface UsuarioRegistrado {
  id: number;
  email: string;
  name: string;
  token: string;
  role: number;
}

export interface AuthInfo {
  user: UsuarioRegistrado;
  token: string;
}

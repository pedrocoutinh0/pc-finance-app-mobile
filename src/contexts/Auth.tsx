import React, {useContext} from 'react';

import {createContext, useState} from 'react';
import {authService} from '../services/auth/authService';

export interface AuthData {
  token: string;
  username: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (username: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuth] = useState<AuthData>();

  async function signIn(username: string, password: string): Promise<AuthData> {
    const auth = await authService.signIn(username, password);
    setAuth(auth);

    return auth;
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);

    return;
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

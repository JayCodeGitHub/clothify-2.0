"use client"

import React, { useContext, useState, useEffect } from "react";
import { getCookie } from "cookies-next";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string | null;
  setToken (token: string | null): void;
}

const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const cookieToken = getCookie("token");
        if (cookieToken) {
        setToken(cookieToken);
        }
    }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
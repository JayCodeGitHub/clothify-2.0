"use client"

import React, { useContext, useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import axios from "axios";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string | false;
  setToken (token: string | false): void;
}

const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | false>(false);

  const checkToken = async (token: string) => {
    try {
      const { data } = await axios.post('/api/auth/me', { token });
      setToken(data);
    } catch (error) {
      setToken((error as any).response.data);
      deleteCookie("token");
    }
  }

    useEffect(() => {
        const cookieToken = getCookie("token");
      
        if (cookieToken) {
            checkToken(cookieToken);
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
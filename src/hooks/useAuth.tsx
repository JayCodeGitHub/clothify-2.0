"use client"

import React, { useContext, useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string | false;
  setToken (token: string | false): void;
}

const checkToken = async (token: string) => {
  try {
    const { data } = await axios.post('/api/auth/me', { token });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | false>(false);

    useEffect(() => {
        const cookieToken = getCookie("token");
        
        if (cookieToken) {
            checkToken(cookieToken);
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
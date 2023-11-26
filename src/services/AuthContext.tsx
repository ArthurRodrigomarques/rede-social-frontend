"use client"

import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies"
import { useRouter } from "next/navigation";

import { api } from "./api";

export const AuthContext = createContext({} as AuthContextType)

type AuthProviderProps = {
  children: ReactNode;
};

type SignInData = {
    email: string;
    password: string;
}

type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
  };

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
    const router = useRouter()


  const isAuthenticated = !!user;

  useEffect(() => {
    const { "auth_token": token } = parseCookies();

    if (token) {
      // Substitua 'seuIdDoUsuario' pelo verdadeiro _id do usuário
      const userId = '655ccd47b5e986657593dcaa';
      console.log(userId)
      api.get(`/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => setUser(response.data))
      .catch(err => console.log(err));
    }
  }, []);


    async function signIn({email, password}: SignInData) {
        const response = await api.post('/auth/login',{
            email,
            password,
        })

        const { token,  user } = response.data;

        setCookie(undefined, 'auth_token', token, {
            maxAge: 30 * 24 * 60 * 60 //30 days
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        setUser(user)

        router.push("/dashboard")
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

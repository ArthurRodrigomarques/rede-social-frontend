"use client"

import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies"
import { useRouter } from "next/navigation";

import { api } from "./api";



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
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
  };

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const userInformation = async () => {
  //   const {"auth_token": token} = parseCookies()
  //   const userId = "teste"
  //  if(token) {
  //  await api.get(`/user/${userId}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //   })
  //   .then(response => {
  //     setUser(response.data.user); 
  //     console.log(response.data.user);
  //   })
  //   .catch(error => {
  //     console.error('Erro ao obter informações do usuário:', error);
  //   });
  // };
  //   }
   
  //   userInformation()
  // }, []);
  

  async function signIn({ email, password }: SignInData) {
    try {
        const response = await api.post('/auth/login', { 
            email,
            password 
        });

        const { token, user, userId } = response.data;

        setCookie(undefined, 'auth_token', token, { 
            maxAge: 30 * 24 * 60 * 60 // 30 days
        });

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        console.log('Token:', token);
        console.log('id:', userId);

        router.push("/dashboard");

        try {
            const {"auth_token": token} = parseCookies()

            const userResponse = await api.get(`/user/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`
                },
            });
            
            setUser(userResponse.data.user);
            console.log(user)
        } catch (error) {
            console.error('Erro ao obter informações do usuário:', error);
        }
        console.log("usuario xd", user);
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Lide com o erro de autenticação aqui, por exemplo, mostrando uma mensagem ao usuário
    }
}


  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}



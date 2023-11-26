import axios from 'axios';
import { setToken } from './auth';
import { parseCookies } from "nookies"

const { "auth_token": token } = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', {email, password});

    setToken(response.data.token)
    
    return response.data;
  } catch (error) {
    console.error('Erro inesperado:', error);
  }
}
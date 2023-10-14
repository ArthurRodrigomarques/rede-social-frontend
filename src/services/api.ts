import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';

type LoginUser = {
  email: string;
  password: string;
}

type CreateUser = {
  email: string;
  password: string;
  name: string;
}

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

const accessToken = 'access_token';

// setCookie(null, 'access_token', accessToken), {
//   path: '/dashboard',
// } 

export const login = async (loginUser: LoginUser) => {
  try {
    const response = await api.post('/login', loginUser);
    return response.data
  } catch (error) {
    console.log(error)
  }
}
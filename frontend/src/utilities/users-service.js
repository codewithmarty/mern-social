import * as usersAPI from './users-api';

export function getToken() {
    const token = localStorage.getItem('token');

    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));

    if (payload.exp < Date.now() / 1000) {

      localStorage.removeItem('token');

      return null;

    }

    return token;

}

export function getUser() {

    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null;

  }

export async function signUp(data) {

    const token = await usersAPI.signUp(data)
    
    localStorage.setItem('token', token)

    return getUser()
    
}

export async function login(data) {

  const token = await usersAPI.login(data)
  
  localStorage.setItem('token', token)

  return getUser()

}
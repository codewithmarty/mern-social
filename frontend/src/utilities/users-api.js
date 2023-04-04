import sendRequest from './send-request'
import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = '/api/users'

export function signUp(userData) {

  return sendRequest(BASE_URL, 'POST', userData)

}

export function login(credentials) {

  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
  
}

export function getUsers() {

  return sendRequest(BASE_URL)

}

export function updateBioLinks(data) {

  return sendRequest(BASE_URL, 'PUT', data)
  
}

export function addProject(data) {

  return sendRequest(BASE_URL+"/addProject", 'PUT', data)

}

export function uploadImage(data) {
  
  const token = getToken()

  return axios.put(BASE_URL+"/uploadPhoto", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    }
  })

}

export function friendRequest(data) {

  return sendRequest(BASE_URL+"/sendFriendRequest", 'POST', data)

}

export function getFriendships() {

  return sendRequest(BASE_URL+"/getFriendships")

}

export function getMessages(body) {
  
  return sendRequest(BASE_URL+`/getMessages/${body.conversationId}`)

}

export function sendMessage(data) {

  return sendRequest(BASE_URL+`/newMessage`, 'POST', data)

}
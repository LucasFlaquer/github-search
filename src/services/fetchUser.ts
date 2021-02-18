import api from "./api";

export async function fetchUser(username: string) {
  const response = await api.get(`users/${username}`)
  return response.data
  
}
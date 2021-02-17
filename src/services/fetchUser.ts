import api from "./api";

export async function fetchUser(username: string) {
  const response = await api.get(`users/${username}`)
  console.log(response.data)
  return response.data
}
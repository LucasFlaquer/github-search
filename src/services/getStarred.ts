import api from "./api";

export async function getStarred(username: string) {
  const response = await api.get<Array<any>>(`users/${username}/starred`)
  return response.data.length
}
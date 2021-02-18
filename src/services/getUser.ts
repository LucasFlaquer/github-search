import { UserType } from "../context/user";
import { fetchUser } from "./fetchUser";

export async function getUser(username: string) {
  const {
    avatar_url,
    bio,
    company,
    followers,
    following,
    html_url,
    id,
    location,
    login,
    name,
    repos_url,
    public_repos:total_repos,
    twitter_username,
    url
  } = await fetchUser(username)
  const user: UserType = {
    avatar_url,
    bio,
    company,
    followers,
    following,
    html_url,
    id,
    location,
    login,
    name,
    repos_url,
    total_repos,
    twitter_username,
    url,
    starred: 0,
    repos: []
  }
  return user
}
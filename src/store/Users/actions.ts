import { Dispatch } from "react";
import api from "../../services/api";
import { User, UserDispach, UserTypes } from "../types";
 
export const getUser = (username:string) => async (dispatch: Dispatch<UserDispach>)=> {
  try {
    dispatch({type: UserTypes.LOAD_REQUEST})
    const response = await api.get(`/users/${username}`)
    console.log(response.data)
    const {login, avatar_url, html_url, followers, following, id, name, bio, public_repos, twitter_username, company, location } = response.data
    const user:User = {
      id,
      name,
      username:login,
      avatar: avatar_url,
      bio,
      followers,
      following,
      url: html_url,
      totalRepos: public_repos,
      company,
      location,
      twitter:twitter_username,
      repositories: []

    }
    dispatch({
      type: UserTypes.LOAD_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({type: UserTypes.LOAD_FAILURE})
  }
}
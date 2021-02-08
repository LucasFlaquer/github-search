import { Dispatch } from "react";
import api from "../../services/api";
import { UserDispach, UserTypes } from "../types";
 
export const getUser = (username:string) => async (dispatch: Dispatch<UserDispach>)=> {
  try {
    dispatch({type: UserTypes.LOAD_REQUEST})
    const response = await api.get(`/users/${username}`)
    console.log(response.data)
    dispatch({
      type: UserTypes.LOAD_SUCCESS,
      payload:response.data
    })
  } catch (error) {
    dispatch({type: UserTypes.LOAD_FAILURE})
  }
}
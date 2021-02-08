import { Reducer } from "redux";
import { UserActions, UserState, UserTypes } from "../types";

const INITAL_STATE: UserState = {
  data: null,
  error: false,
  loading: false
}

const UserReducer: Reducer<UserState, UserActions> = (state=INITAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return {...state, loading: true}
    
    case UserTypes.LOAD_SUCCESS:
      return {...state, loading:false, error:false, data: state.data, ...action.payload}

    case UserTypes.LOAD_FAILURE:
      return {...state, loading:false, error:true, data: null}
    
    default:
      return state
  }
}

export default UserReducer
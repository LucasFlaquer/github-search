/**
 * Action types
 */
export enum UserTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

export interface UserActions {
  type: string
  payload: User[]
}

export interface Repository {
  id: number
  name: string
}

export interface User {
  id: number
  name:string
  repositories: Repository[]
}

/**State type */
export interface UserState {
  readonly data: User | null
  readonly loading: boolean
  readonly error: boolean

}

export interface UserLoading {
  type: typeof UserTypes.LOAD_REQUEST
}

export interface UserFail {
  type: typeof UserTypes.LOAD_FAILURE
}

export interface UserSuccess {
  type: typeof UserTypes.LOAD_SUCCESS,
  payload: User
}

export type UserDispach = UserLoading | UserFail | UserSuccess
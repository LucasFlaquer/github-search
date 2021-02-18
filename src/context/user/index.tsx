import React, { createContext, Dispatch, SetStateAction, useState } from "react";

export type UserType = {
  name: string
  id: number
  avatar_url: string
  bio: string
  company: string
  followers: number
  following: number
  starred: number
  html_url: string
  location: string
  login: string
  total_repos: number
  repos_url: string
  twitter_username: string
  url: string
}


//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType
  setState: Dispatch<SetStateAction<UserType>>
}

const DEFAULT_VALUE: PropsUserContext = {
  state: {
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    following: 0,
    starred: 0,
    html_url: '',
    id: -1,
    location: '',
    login: '',
    name: '',
    repos_url: '',
    total_repos: 0,
    twitter_username: '',
    url: ''
  },
  setState: () => { }
}

const userContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  // useEffect(() => {

  // }, [])

  return <userContext.Provider value={{ state, setState }}>{children}</userContext.Provider>
}

export { UserContextProvider }
export default userContext
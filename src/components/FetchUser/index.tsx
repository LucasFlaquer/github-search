import React, { FormEvent, useContext, useState } from 'react';
import userContext, { UserType } from '../../context/user';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../../services/fetchUser';

import './styles.scss'

const FetchUser: React.FC = () => {
  const { setState, state } = useContext(userContext)
  const history = useHistory()
  const [username, setUserName] = useState('')



  async function handleFetchUserSubmit(event: FormEvent) {
    event.preventDefault()
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
      total_repos,
      twitter_username,
      url
    } = await fetchUser(username) as UserType
    setState({
      ...state,
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
      url
    });
    history.push(`/sobre/${username}`)
  }

  return (
    <form action="" className="fetch-user" onSubmit={handleFetchUserSubmit}>
      <input type="text" placeholder="Enter user name" onChange={(e) => setUserName(e.target.value)} />
      <button>
        Search
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.80357 0.35714C8.51327 0.35714 10.1529 1.03631 11.3619 2.24525C12.5708 3.4542 13.25 5.09387 13.25 6.80357C13.25 8.21635 12.7954 9.5226 12.0252 10.5852L16.345 14.905C16.5317 15.0891 16.6403 15.3381 16.648 15.6002C16.6556 15.8623 16.5619 16.1173 16.3862 16.312C16.2105 16.5066 15.9665 16.626 15.7049 16.6452C15.4434 16.6643 15.1846 16.5818 14.9824 16.4149L14.905 16.345L10.5852 12.0252C9.48608 12.8234 8.16198 13.2522 6.80357 13.25C5.09387 13.25 3.45419 12.5708 2.24525 11.3619C1.03631 10.1529 0.35714 8.51327 0.35714 6.80357C0.35714 5.09387 1.03631 3.4542 2.24525 2.24525C3.45419 1.03631 5.09387 0.35714 6.80357 0.35714ZM6.80357 2.39285C5.63377 2.39285 4.51189 2.85755 3.68472 3.68472C2.85755 4.51189 2.39285 5.63377 2.39285 6.80357C2.39285 7.97336 2.85755 9.09525 3.68472 9.92241C4.51189 10.7496 5.63377 11.2143 6.80357 11.2143C7.97336 11.2143 9.09524 10.7496 9.92241 9.92241C10.7496 9.09525 11.2143 7.97336 11.2143 6.80357C11.2143 5.63377 10.7496 4.51189 9.92241 3.68472C9.09524 2.85755 7.97336 2.39285 6.80357 2.39285Z" fill="white" />
        </svg>
      </button>

    </form>
  )
}

export default FetchUser;
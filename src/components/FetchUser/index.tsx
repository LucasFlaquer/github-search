import React, { useState } from 'react';

// import { Container } from './styles';

const FetchUser: React.FC = () => {
  const [username, setUserName] = useState('')

  function handleFetchUserSubmit() {
    
  }

  return (
    <form action="" className="fetch-user">
      <input type="text" placeholder="Enter user name"/>
      <button>Search</button>
    </form>
  )
}

export default FetchUser;
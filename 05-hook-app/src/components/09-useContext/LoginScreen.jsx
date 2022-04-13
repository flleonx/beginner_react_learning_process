import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  // 1. Get userContext's reference
  const { setUser } = useContext( UserContext );
  // 2. setUser
  const user = {
    id: 1234,
    name: 'flleonx'
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr/>

      <button
        className="btn btn-primary"
        onClick={ () => setUser(user) }
      >
        Login
      </button>

    </>
  )
};

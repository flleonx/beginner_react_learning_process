import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

  const [user, setUser] = useState({});

  return (
    // It is possible to access this values from the components that are
    // whitin the UserContext

    // It is also useful to manage states
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter />
    </UserContext.Provider>
  )
};

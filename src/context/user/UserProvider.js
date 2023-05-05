import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
  const [basicDemos, setBasicDemos] = [];
  const [advancedDemos, setAdvancedDemos] = [];
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  return (
    <UserContext.Provider
      value={{
        contextData: [
          user,
          setUser,
          basicDemos,
          advancedDemos,
          setBasicDemos,
          setAdvancedDemos,
        ],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

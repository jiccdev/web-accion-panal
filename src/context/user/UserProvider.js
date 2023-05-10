import React, { useReducer } from 'react';
import { UserContext } from './UserContext';
import { reducer } from './reducer';

const initialState = {
  user: {
    name: '',
    phone: '',
    email: '',
    // range: 1,
    terms: false,
  },
  authUser: [],
  validationCode: {
    uniqueCode: undefined,
  },
  basicDemos: [],
  advancedDemos: [],
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        contextData: [state, dispatch],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

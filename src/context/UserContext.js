import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const useUpdateUser = () => {
  return useContext(UpdateUserContext);
};

export const UserProvider = ({ value, children }) => {
  const [user, setUser] = useState(value);

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};

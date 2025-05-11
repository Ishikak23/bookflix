import { createContext, ReactNode, useContext, useState } from "react";

import { User } from "firebase/auth";

interface userContextInterface {
  loggedInUser: User | undefined;
  setLoggedInUser: (user: User | undefined) => void;
}
const UserContext = createContext<userContextInterface | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<User | undefined>(undefined);
  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

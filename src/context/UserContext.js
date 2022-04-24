import { createContext, useState, useContext } from "react";
import profile from "../user.json";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(profile);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  return { user, setUser };
}

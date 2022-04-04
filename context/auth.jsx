import React, { createContext, useEffect, useState } from "react";
import { isLocalStorageByKey } from "../lib/storage/is-local-storage.js";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  let [isAuthed, setIsAuthed] = useState(false);

  console.log(isLocalStorageByKey("token"), "token");

  useEffect(() => {
    if (isLocalStorageByKey("token")) {
      setIsAuthed(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthed }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

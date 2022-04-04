import React, { createContext, useContext, useState } from "react";
import { isLocalStorageByKey } from "../lib/storage/is-local-storage.js";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  let [isAuthed, setIsAuthed] = useState(isLocalStorageByKey("token"));
  console.log(isAuthed);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

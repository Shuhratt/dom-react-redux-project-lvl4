import React, { createContext, useContext, useEffect, useState } from "react";
import { isLocalStorageByKey } from "../lib/storage/is-local-storage.js";
import { getLocaleStorage } from "../lib/storage/get-local-storage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  let [isAuthed, setIsAuthed] = useState(isLocalStorageByKey("token"));
  let [accessToken, setAccessToken] = useState("");
  // console.count("render AuthProvider");

  useEffect(() => {
    setAccessToken(getLocaleStorage("token") ?? "");
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

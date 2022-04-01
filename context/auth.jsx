import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ accessToken: "" });

export const AuthProvider = ({ children }) => {
  const [accessToken, setToken] = useState({ accessToken: "1" });

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

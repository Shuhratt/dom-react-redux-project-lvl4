import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

const Main = () => {
  const { accessToken } = useContext(AuthContext);
  return <div>Main {JSON.stringify(accessToken)}</div>;
};

export default Main;

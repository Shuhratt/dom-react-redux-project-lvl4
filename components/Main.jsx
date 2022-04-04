import React from "react";
import { useAuth } from "../context/auth";

const Main = () => {
  const { isAuthed } = useAuth();
  return <div>Main {isAuthed}</div>;
};

export default Main;

import React from "react";
import { SearchStock } from "./SearchStock";
import LoginButton from "./LoginButton";
import { useAuth } from "../context/AuthContext";
import { UserInfo } from "./UserInfo";
const Headers = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className=" relative w-full  h-14 flex justify-center items-center">
      <SearchStock />
      {user ? <UserInfo /> : <LoginButton />}
    </div>
  );
};

export default Headers;

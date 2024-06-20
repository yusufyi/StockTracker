// src/components/LoginButton.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const LoginButton: React.FC = () => {
  const { loginWithGoogle } = useAuth();

  return <button onClick={loginWithGoogle}>Sign in with Google</button>;
};

export default LoginButton;

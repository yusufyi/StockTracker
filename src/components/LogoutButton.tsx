// src/components/LogoutButton.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Sign out</button>;
};

export default LogoutButton;

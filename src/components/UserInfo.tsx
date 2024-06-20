import React, { useState } from "react";

import LogoutButton from "./LogoutButton";
import { useAuth } from "../context/AuthContext";

export const UserInfo = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative inline-block text-left m-10 justify-center">
      <img
        className="h-10 w-10 rounded-full cursor-pointer"
        src={user?.photoURL || "/default-avatar.png"}
        alt={user?.displayName || "User"}
        onClick={toggleMenu}
      />

      {menuOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/portfolio"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

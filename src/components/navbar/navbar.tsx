import React, { useEffect, useState } from "react";
import LogoutButton from "../buttons/logout-btn";

interface User {
  username: string;
  role: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-semibold">
        <h1 className="text-[30px]">Leave App</h1>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <span>Welcome, {user.username}</span>
          <LogoutButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

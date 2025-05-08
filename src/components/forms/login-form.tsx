import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "kusan", password: "kusan123", role: "user" },
  { username: "emma", password: "user456", role: "user" },
];

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100"
      style={{ backgroundImage: "url('/src/assets/homepic.avif')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

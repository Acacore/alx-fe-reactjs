import React, { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
      setError("");
    } else {
      setUserData(null);
      setError("User not found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;

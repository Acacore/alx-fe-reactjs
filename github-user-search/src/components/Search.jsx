import React, { useState } from "react";
import "../index.css"

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    onSearch(username);
    setUsername("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-8"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="px-6 py-3 w-96 md:w-[500px] border border-gray-300 rounded-l-lg text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

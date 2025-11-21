import React from "react";
import "../index.css"

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto mt-6 p-4 border rounded-lg shadow-lg flex flex-col items-center bg-white">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{user.login}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;

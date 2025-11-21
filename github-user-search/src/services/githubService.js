import React from 'react'
import.meta.env.VITE_APP_GITHUB_API_KEY
import axios from "axios"

function githubServices() {
 
}

const BASE_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data; // Returns user data object
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null; // Return null if user not found

  }
};

export default githubServices


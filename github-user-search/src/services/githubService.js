import axios from "axios";

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&per_page=20`;
  const response = await axios.get(url);
  return response.data;
};

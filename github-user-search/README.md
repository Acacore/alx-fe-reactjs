## GitHub User Search Application

A simple React application that allows users to search for GitHub profiles using the GitHub API. The app provides a clean UI where users can enter a GitHub username, fetch profile data, and view basic information such as avatar, bio, repositories count, followers, and a link to the full GitHub profile.

## Objective

The goal of this project is to set up the initial foundation of a GitHub User Search Application.
This phase focuses on:

Creating the React application

Installing essential dependencies

Preparing the environment for API integration and UI development

Establishing the project structure for future features

### Project Overview

The GitHub User Search Application enables users to:

Search for any GitHub user by username

View basic profile details returned by the GitHub API

Redirect to the user’s GitHub profile page

Handle search errors (e.g., user not found)

Future updates will include additional features such as repository listings, themes, and improved UI.

### Technologies Used

React (Vite or CRA) – Main frontend framework

Axios or Fetch API – For handling API requests

GitHub REST API – Data source

CSS / Tailwind / Styled Components (choose your styling option)

### Project Setup
#### Clone the repository
git clone https://github.com/your-username/github-user-search.git
cd github-user-search

#### Install dependencies
npm install


(or yarn install / pnpm install)

#### Start the development server
npm run dev

#### Installed Packages

Depending on your setup, these may include:

axios – API requests

react-router-dom (optional) – Page navigation

dotenv – Handling environment variables (for GitHub API if using tokens)

#### Environment Variables (Optional)

If your app uses a GitHub token to avoid rate limits:

Create a .env file:

VITE_GITHUB_TOKEN=your_token_here

#### Features (Current + Planned)
Current

React project initialized

Environment prepared for API integration

Planned

Search input for GitHub usernames

Fetch user details from GitHub API

Display user avatar, bio, followers, repos count

Error handling for invalid usernames

Dark/Light theme

Display user repositories

#### API Reference

GitHub Users API:
https://api.github.com/users/{username}

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

📄 License

This project is licensed under the MIT License.
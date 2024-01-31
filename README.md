# Github User Search App

A minimalist web application built with React.js and the MERN stack to search for GitHub users by their username.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Github User Search App is a web application that allows users to search for GitHub users by entering their usernames. The app leverages the GitHub API to fetch user details and displays the results in a clean and minimalist interface.

## Features

- **Real-time Search:** Users can see search results as they type without pressing a search button.
- **Dark Theme:** The interface is designed with a dark theme for a modern and sleek look.
- **Clear Button:** A clear button is provided to reset the search input.
- **Error Handling:** In case of API rate limits or other errors, appropriate error messages are displayed.
- **Followers Count:** Displays the number of followers for each user.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user-search-app.git 
   ```

2. Navigate to the project directory:

  `cd github-user-search-app`

3. Install dependencies:

  `npm install`

## Usage

1.  Run the application:

  `npm start`

2. Open your browser and go to http://localhost:3000.
3. Enter a GitHub username in the search bar to see the results.


## API Configuration

To configure the GitHub API access, update the `GITHUB_TOKEN` variable in the **server.js**, **app.js** file with your GitHub token.`

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.



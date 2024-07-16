import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:3000/api/users';
const GITHUB_TOKEN = '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'; 


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [noUsersFound, setNoUsersFound] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (searchQuery.trim() === '') {
          setUsers([]);
          return;
        }

        const response = await axios.get(`${API_URL}?q=${searchQuery}&sort=followers`);
        const fetchedUsers = response.data.items;

        if (fetchedUsers.length === 0) {
          setNoUsersFound(true);
        } else {
          setNoUsersFound(false);
        }

        // Fetch followers count for each user using the user's URL
        const usersWithFollowers = await Promise.all(
          fetchedUsers.map(async (user) => {
            try {
              const userResponse = await axios.get(user.url, {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
              });
              return {
                ...user,
                followersCount: userResponse.data.followers,
              };
            } catch (error) {
              console.error(error);

              if (error.response && error.response.status === 403) {
                // Handle rate limit exceeded error
                setApiError('API rate limit exceeded. Please try again later.');
              }

              // Display 'N/A' if followers count cannot be fetched
              return {
                ...user,
                followersCount: 'N/A',
              };
            }
          })
        );

        setUsers(usersWithFollowers);
        setApiError(null); // Reset the API error state on successful fetch
      } catch (error) {
        console.error(error);
        setNoUsersFound(true);
        setApiError('Failed to fetch users. Please try again.');
      }
    };

    fetchUsers();
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    setUsers([]);
    setNoUsersFound(false);
    setApiError(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearSearch();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Search</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={clearSearch}>Clear</button>
        </div>
        {noUsersFound && <p className="no-users">NO USERS FOUND</p>}
        {apiError && <p className="api-error">{apiError}</p>}
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Avatar</th>
              <th>Profile</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt={user.login} className="avatar" />
                </td>
                <td>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td>{user.followersCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;









// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:3000/api/users';
const GITHUB_TOKEN = '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'; 


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [noUsersFound, setNoUsersFound] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (searchQuery.trim() === '') {
          setUsers([]);
          return;
        }

        const response = await axios.get(`${API_URL}?q=${searchQuery}&sort=followers`);
        const fetchedUsers = response.data.items;

        if (fetchedUsers.length === 0) {
          setNoUsersFound(true);
        } else {
          setNoUsersFound(false);
        }

        // Fetch followers count for each user using the user's URL
        const usersWithFollowers = await Promise.all(
          fetchedUsers.map(async (user) => {
            const userResponse = await axios.get(user.url);
            return {
              ...user,
              followersCount: userResponse.data.followers,
            };
          })
        );

        setUsers(usersWithFollowers);
      } catch (error) {
        console.error(error);
        setNoUsersFound(true);
      }
    };

    fetchUsers();
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    setUsers([]);
    setNoUsersFound(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearSearch();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Search</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={clearSearch}>Clear</button>
        </div>
        {noUsersFound && <p className="no-users">NO USERS FOUND</p>}
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Avatar</th>
              <th>Profile</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} alt={user.login} className="avatar" />
                </td>
                <td>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td>{user.followersCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

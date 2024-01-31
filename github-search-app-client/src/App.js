// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import ErrorMessage from './components/ErrorMessage';

const API_URL = 'http://localhost:3000/api/users';
const GITHUB_TOKEN = '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'; 


export default function App() {
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
                setApiError('API rate limit exceeded. Please try again later.');
              }

              return {
                ...user,
                followersCount: 'N/A',
              };
            }
          })
        );

        setUsers(usersWithFollowers);
        setApiError(null);
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
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          clearSearch={clearSearch}
          handleKeyPress={handleKeyPress}
        />
        {noUsersFound && <ErrorMessage message="NO USERS FOUND" />}
        {apiError && <ErrorMessage message={apiError} />}
        <UserTable users={users} />
      </header>
    </div>
  );
}

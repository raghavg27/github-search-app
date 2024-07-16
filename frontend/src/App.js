.import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchInput from './components/SearchInput';
import UserDetails from './components/UserDetails';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import ErrorMessage from './components/ErrorMessage';
import LinearIndeterminate from './components/LinearIndeterminate';
import getLPTheme from './theme';
import { debounce } from './utils';
import axios from 'axios';

const API_URL = 'https://github-search-app.onrender.com/api/users';
const GITHUB_TOKEN = process.env.REACT_APP_API_KEY;

console.log('GitHub Token:', process.env.REACT_APP_API_KEY);
console.log('All env:', process.env);

function App() {
  const [mode, setMode] = useState('light');
  const theme = createTheme(getLPTheme(mode));

  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [noUsersFound, setNoUsersFound] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(
    debounce(async (query) => {
      try {
        setLoading(true);
        if (query.trim() === '') {
          setUsers([]);
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_URL}?q=${query}&sort=followers`);
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
                bio: userResponse.data.bio,
                company: userResponse.data.company,
                location : userResponse.data.location,
                public_repos: userResponse.data.public_repos,
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
      } finally {
          setLoading(false);
    } 
    }, 1000), // 1000ms debounce
    []
  );

  useEffect(() => {
    fetchUsers(searchQuery);
  }, [searchQuery, fetchUsers]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setUsers([]);
    setNoUsersFound(false);
    setApiError(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      <HeroSection />
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        clearSearch={clearSearch}
        handleKeyPress={handleKeyPress}
      />
      {loading && <LinearIndeterminate />}
      {noUsersFound && <ErrorMessage message="NO USERS FOUND" />}
      {apiError && <ErrorMessage message={apiError} />}
      <UserDetails users={users} />
      <Highlights />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
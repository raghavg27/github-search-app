// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

const GITHUB_API_URL = 'https://api.github.com/search/users';
const GITHUB_TOKEN = process.env.REACT_APP_API_KEY; 

app.get('/api/users', async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}&sort=followers`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin to access the resource
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




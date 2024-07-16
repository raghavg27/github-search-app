// src/components/UserDetails.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function UserDetails({ users }) {
  // Ensure users is an array
  if (!Array.isArray(users)) {
    users = [];
  }

  return (
    <Box py={1} my={1} mx={2}>
      <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3} sm={4}>
                    <Avatar 
                      src={user.avatar_url} 
                      alt={user.login} 
                      sx={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <Typography variant="h6" component="div">
                      {user.login}
                    </Typography>
                    <Typography variant="body2">{user.bio}</Typography>
                    <Typography variant="body2">
                      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        PROFILE
                      </a>
                    </Typography>
                    <Typography variant="body2">Followers: {user.followersCount}</Typography>
                    <Typography variant="body2">Repos: {user.public_repos}</Typography>
                    <Typography variant="body2">Location: {user.location}</Typography>
                    <Typography variant="body2">Company: {user.company}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UserDetails;
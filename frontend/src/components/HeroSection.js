// components/HeroSection.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box 
      sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Git Seek
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Discover GitHub users effortlessly <br/>and explore their profiles with ease.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
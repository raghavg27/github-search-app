// components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ bgcolor: 'background.paper', p: 6 }} 
      component="footer"
      id = "about"
    >
      <Typography variant="body1" align="center">A minimalist MERN full stack web project.</Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; Raghav Gupta 2024
      </Typography >
      <div align="center">
        <Link href="https://github.com/raghavg27/github-search-app" color="inherit">
          Project Repository
      </Link>
      </div>
    </Box>
  );
};

export default Footer;
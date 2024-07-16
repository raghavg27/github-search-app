// src/components/ErrorMessage.js

import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorMessage = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="body1" color="error" className="error-message">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
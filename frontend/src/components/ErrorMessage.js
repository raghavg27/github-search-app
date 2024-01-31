// src/components/ErrorMessage.js

// component to display error message

import React from 'react';

const ErrorMessage = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
import React from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SearchInput = ({ searchQuery, setSearchQuery, clearSearch, handleKeyPress }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={6}>
      <TextField
        fullWidth
        margin="normal"
        label="Search user"
        variant="outlined"
        value={searchQuery}
        onChange={setSearchQuery}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={clearSearch} size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
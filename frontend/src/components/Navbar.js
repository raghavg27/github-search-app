import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, Link } from '@mui/material';
import logo from '../logo.png';

const Navbar = ({ mode, toggleTheme }) => {
  return (
    <AppBar position="static" id = "home">
      <Toolbar>
        <Link
          href="/"
          underline="none"
          component="a"
          sx={{ display: 'block' }}
        >
          <img src={logo} alt="Logo" style={{ height: '50px', width: '50px', marginRight: 2 }} />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link href="#home" color="inherit" underline="none" component="a">
            Home
          </Link>
          <Link href="#about" color="inherit" underline="none" component="a">
            About
          </Link>
          <Link href="#highlights" color="inherit" underline="none" component="a">
            Features
          </Link>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>   
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
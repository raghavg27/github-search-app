import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const items = [
  {
    icon: <SearchRoundedIcon />,
    title: 'Real-time Search',
    description:
      'Users can see search results as they type, eliminating the need to press a search button and providing a seamless experience.',
  },
  {
    icon: <Brightness4RoundedIcon />,
    title: 'Theme Switcher',
    description:
      'The interface is designed with a dark theme for a modern and sleek look, allowing users to switch themes effortlessly.',
  },
  {
    icon: <DesignServicesRoundedIcon />,
    title: 'Material UI & Google-Inspired Design',
    description:
      'Utilizing Material UI, the application draws inspiration from Google’s material design principles, ensuring a polished and cohesive aesthetic.',
  },
  {
    icon: <ErrorOutlineRoundedIcon />,
    title: 'Error Handling',
    description:
      'In the event of API rate limits or other errors, the application displays appropriate error messages to keep users informed.',
  },
  {
    icon: <GroupRoundedIcon />,
    title: 'Followers Count',
    description:
      'Displays the number of followers for each user by making individual API calls, providing detailed user insights.',
  },
  {
    icon: <SpeedRoundedIcon />,
    title: 'De-throttling and Debouncing',
    description:
      'Implemented de-throttling and debouncing techniques to ensure optimal performance and responsiveness during searches.',
  },
];

export default function Highlights() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 2, sm: 12 },
        pb: { xs: 10, sm: 18 },
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
            
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  background: 'transparent',
                  backgroundColor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[50],
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
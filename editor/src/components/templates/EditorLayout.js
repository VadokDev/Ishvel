import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    width: 'calc(100% - 240px)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const EditorLayout = ({ LeftSidebar, Editor, Suggestions, Metrics }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'secondary.dark',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            minHeight: '100vh',
          }}
        >
          <LeftSidebar open={open} handleDrawerClose={handleDrawerClose} />
          <Main open={open}>
            <Editor />
          </Main>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Suggestions />
      </Grid>
      <Grid item xs={2}>
        <Metrics />
      </Grid>
    </Grid>
  );
};

export default EditorLayout;

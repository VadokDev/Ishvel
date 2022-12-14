import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

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

const EditorLayout = ({
  LeftSidebar,
  Editor,
  Suggestions,
  Coding,
  Metrics,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Paper
          sx={{
            display: 'flex',
            p: 2,
            backgroundColor: 'background.paper',
            minHeight: '100vh',
          }}
        >
          <LeftSidebar open={open} handleDrawerClose={handleDrawerClose} />
          <Main open={open}>
            <Editor />
          </Main>
        </Paper>
      </Grid>
      <Grid container item direction={'column'} xs={3}>
        <Grid item>
          <Coding />
        </Grid>
        <Grid item>
          <Suggestions />
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Metrics />
      </Grid>
    </Grid>
  );
};

export default EditorLayout;

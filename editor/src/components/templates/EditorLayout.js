import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useBearStore } from '../../core/services';
import ChartsArea from '../organisms/ChartsArea';

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

const EditorLayout = ({ Editor, Suggestions, Coding, Metrics, Config }) => {
  const showMetrics = useBearStore((state) => state.showMetrics);

  return (
    <Grid container spacing={2} pl={2} mt={1}>
      <Grid item xs={7}>
        {showMetrics ? <ChartsArea /> : <Editor />}
      </Grid>
      <Grid container item direction={'column'} pr={2} xs={5}>
        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <Coding />
          </Grid>
          <Grid item xs={6}>
            <Config />
          </Grid>

          <Grid container item direction={'column'}>
            <Grid item>
              <Metrics />
            </Grid>
            <Grid item>
              <Suggestions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditorLayout;

import React from 'react';

import Grid from '@mui/material/Grid';
import TitlePaper from '../molecules/TitlePaper';
import CodeEditor from '../molecules/CodeEditor';
import CodeIcon from '@mui/icons-material/Code';
const CodeArea = () => {
  return (
    <Grid container direction={'column'} rowSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item>
        <TitlePaper Icon={CodeIcon} content={'Resolver tarea'} />
      </Grid>

      <Grid item>
        <CodeEditor />
      </Grid>
    </Grid>
  );
};

export default CodeArea;

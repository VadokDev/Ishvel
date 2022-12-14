import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CodeEditor from '../molecules/CodeEditor';

const CodeArea = () => {
  return (
    <Grid direction={'column'}>
      <Grid item>
        <Typography variant='h5' mt={3}>
          Programación
        </Typography>
      </Grid>

      <Grid item>
        <CodeEditor />
      </Grid>
      <Grid item>
        <Button>Evaluar solución</Button>
      </Grid>
    </Grid>
  );
};

export default CodeArea;

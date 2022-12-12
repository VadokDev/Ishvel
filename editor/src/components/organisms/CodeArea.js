import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useBearStore } from '../../core/services';
import CodeEditor from '../molecules/CodeEditor';

const CodeArea = () => {
  const suggestions = useBearStore((state) => state.suggestions);
  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} pt={3}>
      <CodeEditor />
      <Button>Evaluar solución</Button>
    </Grid>
  );
};

export default CodeArea;

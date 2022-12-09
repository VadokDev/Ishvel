import React from 'react';
import BulletList from '@tiptap/extension-bullet-list';
import { mergeAttributes, Node } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Grid, Container, Typography } from '@mui/material';
import Metric from '../molecules/Metric';

const metricsArray = [
  { name: 'Legibilidad', color: 'error', value: 45 },
  { name: 'Comprensibilidad', color: 'warning', value: 15 },
  { name: 'Coherencia', color: 'info', value: 34 },
];
const programmingMetricsArray = [
  { name: 'Esfuerzo', color: 'primary', value: 45 },
  { name: 'Dificultad', color: 'secondary', value: 84 },
  { name: 'Tiempo', color: 'success', value: 34 },
];

const MetricsArea = () => {
  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item>
        <Typography variant='h5' mt={3}>
          Redacción
        </Typography>
      </Grid>
      {metricsArray.map((metric) => (
        <Grid item xs={12}>
          <Metric
            name={metric.name}
            value={metric.value}
            color={metric.color}
          ></Metric>
        </Grid>
      ))}
      <Grid item>
        <Typography variant='h5' mt={3}>
          Programación
        </Typography>
      </Grid>
      {programmingMetricsArray.map((metric) => (
        <Grid item xs={12}>
          <Metric
            name={metric.name}
            value={metric.value}
            color={metric.color}
          ></Metric>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsArea;

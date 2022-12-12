import React from 'react';
import BulletList from '@tiptap/extension-bullet-list';
import { mergeAttributes, Node } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Grid, Container, Typography } from '@mui/material';
import Metric from '../molecules/Metric';
import { useBearStore } from '../../core/services';

const metricsArray = [
  /*
  If time allows me...
  { name: 'Legibilidad', color: 'error', value: 45 },
  { name: 'Comprensibilidad', color: 'warning', value: 15 },
  { name: 'Coherencia', color: 'info', value: 34 },
  */
];
const programmingMetricsArray = [
  { name: 'Complejidad Ciclomática', metric: 'cc', color: 'primary' },
  { name: 'Esfuerzo', metric: 'hEffort', color: 'primary' },
  { name: 'Dificultad', metric: 'hDifficult', color: 'secondary' },
  { name: 'Tiempo', metric: 'hTime', color: 'success' },
  { name: 'Volumen', metric: 'hVolume', color: 'warning' },
];

const MetricsArea = () => {
  const metricValues = useBearStore((state) => state.metrics);
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
            value={metricValues[metric.metric]}
            color={metric.color}
          ></Metric>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsArea;

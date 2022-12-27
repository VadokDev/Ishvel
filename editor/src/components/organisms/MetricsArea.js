import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Metric from '../molecules/Metric';
import { useBearStore } from '../../core/services';

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
    <Grid container direction={'column'} rowSpacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid item>
        <Typography variant='h5' mt={3}>
          Métricas
        </Typography>
      </Grid>
      {programmingMetricsArray.map((metric, i) => (
        <Grid key={`metric-number-${i}`} item>
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

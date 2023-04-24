import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Metric from '../molecules/Metric';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { CardActions, CardContent } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TitlePaper from '../molecules/TitlePaper';

import { useBearStore } from '../../core/services';

const programmingMetricsArray = [
  { name: 'C. Ciclomática', metric: 'cc', color: 'primary' },
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
        <TitlePaper Icon={EqualizerIcon} content={'Métricas'} />
      </Grid>
      <Grid item>
        <Card sx={{ boxShadow: 0 }}>
          <CardContent>
            {programmingMetricsArray.map((metric, i) => (
              <Grid key={`metric-number-${i}`} item>
                <Metric
                  status={'similar'}
                  name={metric.name}
                  value={metricValues[metric.metric]}
                  color={metric.color}
                ></Metric>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MetricsArea;

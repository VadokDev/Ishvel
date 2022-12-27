import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ReactApexChart from 'react-apexcharts';
import { useBearStore } from '../../core/services';
import { metricsRepository } from '../../core/services';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TitlePaper from '../molecules/TitlePaper';

const programmingMetricsArray = [
  { name: 'Complejidad Ciclomática', metric: 'cc', color: 'primary' },
  { name: 'Esfuerzo', metric: 'hEffort', color: 'primary' },
  { name: 'Dificultad', metric: 'hDifficult', color: 'secondary' },
  { name: 'Tiempo', metric: 'hTime', color: 'success' },
  { name: 'Volumen', metric: 'hVolume', color: 'warning' },
];

const ChartsArea = () => {
  const content = useBearStore((state) => state.content);
  const studentsMetrics = metricsRepository.getAllMetricsByContent(
    'students',
    content
  );

  const teachersMetrics = metricsRepository.getAllMetricsByContent(
    'teachers',
    content
  );

  const defaultOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: metricsRepository.getSemesters(),
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#fff'],
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          cssClass: 'MuiTypography-body1',
        },
        formatter: (val) => val.toFixed(2),
      },
    },
  };

  const chartsDataMapper =
    (metrics) =>
    ({ name, metric }) => ({
      options: {
        ...defaultOptions,
        title: {
          text: name,
          align: 'left',
        },
      },
      series: [
        {
          name,
          data: metrics.map((metrics) => metrics[metric]),
        },
      ],
    });

  const studentsChartsData = programmingMetricsArray.map(
    chartsDataMapper(studentsMetrics)
  );
  const teachersChartsData = programmingMetricsArray.map(
    chartsDataMapper(teachersMetrics)
  );

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Grid container direction={'column'} spacing={2}>
          <Grid item>
            <TitlePaper
              Icon={SupervisedUserCircleIcon}
              content={'Métricas estudiantes'}
            />
          </Grid>
          {studentsChartsData.map((chart, i) => (
            <Grid key={`chart-students-${i}`} item>
              <Paper>
                <ReactApexChart
                  options={chart.options}
                  series={chart.series}
                  type='line'
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container direction={'column'} spacing={2}>
          <Grid item>
            <TitlePaper
              Icon={AccountCircleIcon}
              content={'Métricas profesores'}
            />
          </Grid>
          {teachersChartsData.map((chart, i) => (
            <Grid key={`chart-teachers-${i}`} item>
              <Paper>
                <ReactApexChart
                  options={chart.options}
                  series={chart.series}
                  type='line'
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChartsArea;

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
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      foreColor: '#fff',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.3)',
      row: {
        colors: ['#002762', 'transparent'],
        opacity: 0.3,
      },
    },
    xaxis: {
      categories: metricsRepository.getSemesters(),
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(2),
      },
    },
  };

  const chartsDataMapper = ({ name, metric }) => ({
    options: {
      ...defaultOptions,
      title: {
        text: name,
        align: 'left',
        style: {
          color: '#fff',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          cssClass: 'MuiTypography-body2',
        },
      },
    },
    series: [
      chartsDataSeriesMapper(studentsMetrics, 'Estudiantes')(metric),
      chartsDataSeriesMapper(teachersMetrics, 'Profesores')(metric),
    ],
  });

  const chartsDataSeriesMapper = (metrics, name) => (metric) => ({
    name,
    data: metrics.map((metrics) => metrics[metric]),
  });

  const chartsData = programmingMetricsArray.map(chartsDataMapper);

  return (
    <Grid container direction={'column'}>
      <Grid item mb={2}>
        <TitlePaper
          Icon={SupervisedUserCircleIcon}
          content={'Métricas históricas de estudiantes y profesores'}
        />
      </Grid>
      <Grid container spacing={2}>
        {chartsData.map((chart, i) => (
          <Grid key={`chart-students-${i}`} item md={6}>
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
  );
};

export default ChartsArea;

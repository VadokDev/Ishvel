import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EditIcon from '@mui/icons-material/Edit';
import { useBearStore } from '../../core/services';

const TitlePaper = ({
  Icon,
  content,
  showDownloadButton,
  showMetricsButton,
  showEditorButton,
  downloadButtonHandler,
}) => {
  const setShowMetrics = useBearStore((state) => state.setShowMetrics);

  return (
    <Paper elevation={3}>
      <Grid container pt={1} pb={1}>
        <Grid
          pl={1}
          flexGrow={1}
          item
          display={'flex'}
          flexWrap
          alignItems={'center'}
        >
          <Icon />
          <Typography pl={1} variant={'h6'}>
            {content}
          </Typography>
        </Grid>
        {showDownloadButton && (
          <Grid item pr={1}>
            <Button
              variant='outlined'
              startIcon={<DownloadIcon />}
              color='success'
              onClick={downloadButtonHandler}
            >
              Descargar tarea
            </Button>
          </Grid>
        )}
        {showMetricsButton && (
          <Grid item pr={1}>
            <Button
              variant='outlined'
              onClick={() => setShowMetrics(true)}
              startIcon={<QueryStatsIcon />}
            >
              Métricas históricas
            </Button>
          </Grid>
        )}
        {showEditorButton && (
          <Grid item pr={1}>
            <Button
              variant='outlined'
              onClick={() => setShowMetrics(false)}
              startIcon={<EditIcon />}
            >
              Volver al Editor
            </Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default TitlePaper;

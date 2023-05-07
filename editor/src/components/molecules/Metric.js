import {
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Grid,
  Typography,
  Chip,
} from '@mui/material';

import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { secondsToMins } from '../../core/utils/timeUtils';

const iconByStatus = {
  1: DangerousIcon,
  2: WarningIcon,
  3: CheckCircleIcon,
  4: WarningIcon,
  5: DangerousIcon,
};

const colorByStatus = {
  1: 'error',
  2: 'warning',
  3: 'success',
  4: 'warning',
  5: 'error',
};

const complexityNames = {
  1: 'Mucho más fácil',
  2: 'Ligeramente más fácil',
  3: 'Dificultad similar',
  4: 'Ligeramente más difícil',
  5: 'Mucho más difícil',
};

const Metric = ({ name, value, complexity }) => {
  const Icon =
    iconByStatus[complexity ?? secondsToMins(value) > 60 ? '2' : '3'];
  return (
    <Grid item>
      <Card sx={{ boxShadow: 0 }}>
        <Grid container>
          <Grid
            pl={1}
            flexGrow={1}
            item
            display={'flex'}
            flexWrap
            alignItems={'center'}
          >
            <Icon
              color={
                colorByStatus[
                  complexity ?? secondsToMins(value) > 60 ? '2' : '3'
                ]
              }
            />
            <Typography pl={1}>{name}</Typography>
          </Grid>
          <Grid item pr={2}>
            {complexity ? (
              <Chip
                variant='outlined'
                color={colorByStatus[complexity]}
                size='small'
                label={complexityNames[complexity]}
              />
            ) : (
              <Chip
                variant='outlined'
                color={secondsToMins(value) > 60 ? 'warning' : 'success'}
                size='small'
                label={`${secondsToMins(value)}m`}
              />
            )}
          </Grid>
          <Grid item>
            <HelpOutlineIcon />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Metric;

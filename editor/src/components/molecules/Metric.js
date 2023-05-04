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

const Metric = ({ name, value, complexity, status }) => {
  const Icon = iconByStatus[complexity || 3];
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
            <Icon color={colorByStatus[complexity]} />
            <Typography pl={1}>{name}</Typography>
            <Typography pl={1}>{value}</Typography>
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
                color={colorByStatus[complexity]}
                size='small'
                label={value}
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

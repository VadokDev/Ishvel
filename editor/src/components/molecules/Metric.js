import {
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Grid,
  Typography,
} from '@mui/material';

import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const iconByStatus = {
  similar: CheckCircleIcon,
  warning: WarningIcon,
  danger: DangerousIcon,
};

const colorByStatus = {
  similar: 'success',
  warning: 'warning',
  danger: 'danger',
};

const Metric = ({ name, value, status }) => {
  const Icon = iconByStatus[status];
  return (
    <Grid item>
      <Card sx={{ boxShadow: 0 }}>
        <Grid container>
          <Grid item md={2}>
            <Icon color={colorByStatus[status]} />
          </Grid>
          <Grid item md={8}>
            <Typography pl={1}>{name}</Typography>
          </Grid>
          <Grid item md={2}>
            <HelpOutlineIcon />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Metric;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from '@mui/material';

const Metric = ({ name, value, color }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardContent>
        <Typography variant='body1'>{name}</Typography>
        <Typography variant='body1'>{Math.round(value)}</Typography>
        <LinearProgress variant='determinate' value={value} color={color} />
      </CardContent>
      <CardActions>
        <Button size='small'>Ayuda</Button>
      </CardActions>
    </Card>
  );
};

export default Metric;

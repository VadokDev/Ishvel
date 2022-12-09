import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const Suggestion = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Tópicos de Actualidad
        </Typography>
        <Typography variant='body2'>
          Luis Mateucci share Quién es Luis Mateucci, músico y exchico reality
          de "Doble ...
          <br />
          Huachipato Huachipato no se fía del colista: “No podemos relajarnos”
          <br />
          Europa League share Estreno goleador de Aritz en Europa MARCA.com •
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <a href='https://trends.google.com/trends/trendingsearches/daily?geo=CL'>
          <Button size='small'>Más</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default Suggestion;

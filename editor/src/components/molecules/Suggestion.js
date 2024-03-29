import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useBearStore } from '../../core/services';

const Suggestion = ({ id, title, message, type, link }) => {
  const { removeSuggestion } = useBearStore();
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {title}
        </Typography>

        <Typography variant='body2'>{message}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => removeSuggestion(id)}>
          Cerrar
        </Button>
        {type === 'url' && (
          <a href={link} target='_blank' rel='noreferrer'>
            <Button size='small'>Ver más</Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
};

export default Suggestion;

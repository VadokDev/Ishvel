import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TitlePaper = ({ Icon, content }) => {
  return (
    <Paper elevation={3}>
      <Grid container pt={1} pl={1}>
        <Grid item>
          <Icon />
        </Grid>
        <Grid item>
          <Typography pl={1} variant={'h6'} lineHeight={1}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TitlePaper;

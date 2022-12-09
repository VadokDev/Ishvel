import React from 'react';
import BulletList from '@tiptap/extension-bullet-list';
import { mergeAttributes, Node } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import '../atoms/SuggestionsArea.css';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import Suggestion from '../molecules/Suggestion';
const SuggestionsArea = () => {
  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} pt={3}>
      <Grid item xs={12}>
        <Suggestion></Suggestion>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Largo de los párrafos
            </Typography>
            <Typography variant='body2'>
              La sección X cuenta con párrafos demasiado largos, ésto puede
              inducir a una confusión y pérdida de la idea principal, se
              recomienda acotarlo, para mejorar la comprensibilidad del texto
            </Typography>
          </CardContent>
          <CardActions>
            <a href='https://legible.es/blog/formula-de-crawford/'>
              <Button size='small'>Más</Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SuggestionsArea;

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
import { useBearStore } from '../../core/services';

const SuggestionsArea = () => {
  const suggestions = useBearStore((state) => state.suggestions);
  return (
    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} pt={3}>
      {suggestions.map(({ title, message, type, link }, i) => (
        <Grid key={`suggestion-area-${i}`} item xs={12}>
          <Suggestion title={title} message={message} type={type} link={link} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SuggestionsArea;

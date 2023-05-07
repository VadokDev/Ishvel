import React from 'react';
import '../atoms/SuggestionsArea.css';
import { Grid } from '@mui/material';
import Suggestion from '../molecules/Suggestion';
import { useBearStore } from '../../core/services';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TitlePaper from '../molecules/TitlePaper';

const SuggestionsArea = () => {
  const suggestions = useBearStore((state) => state.suggestions);
  return (
    <Grid container direction={'column'} spacing={2} mt={1}>
      <Grid item>
        <TitlePaper Icon={AddTaskIcon} content={'Sugerencias'} />
      </Grid>
      {suggestions.map(({ id, title, message, type, link }, i) => (
        <Grid key={`suggestion-area-${i}`} item>
          <Suggestion
            id={id}
            title={title}
            message={message}
            type={type}
            link={link}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SuggestionsArea;

import { Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useBearStore, codeService } from '../../core/services';

const CodeEditor = () => {
  const { setMetrics, updateSuggestions } = useBearStore();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    setMetrics(codeService.getMetrics(e.target.value));
    updateSuggestions();
  };
  return (
    <Card>
      <CardContent>
        <TextField
          id='outlined-multiline-flexible'
          multiline
          fullWidth
          hiddenLabel={true}
          minRows={10}
          maxRows={10}
          value={value}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
};

export default CodeEditor;

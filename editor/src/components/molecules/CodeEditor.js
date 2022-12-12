import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useBearStore, codeService } from '../../core/services';

const CodeEditor = () => {
  const { setMetrics } = useBearStore();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    setMetrics(codeService.getMetrics(e.target.value));
  };
  return (
    <TextField
      id='outlined-multiline-flexible'
      multiline
      fullWidth
      hiddenLabel={true}
      minRows={10}
      value={value}
      variant='filled'
      onChange={handleChange}
    />
  );
};

export default CodeEditor;

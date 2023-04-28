import { Card, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useBearStore, codeService } from '../../core/services';

const CodeEditor = () => {
  const { updateSolution, code, setCode } = useBearStore();
  const handleChange = (e) => {
    const solutionCode = e.target.value;
    if (solutionCode === '') {
      setCode('');
      return;
    }

    const metrics = codeService.getMetrics(solutionCode);
    updateSolution(solutionCode, metrics);
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
          value={code}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
};

export default CodeEditor;

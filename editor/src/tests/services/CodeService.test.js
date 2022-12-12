import { CodeService } from '../../core/services/CodeService';

describe('CodeService Test Suite', () => {
  it('should return metrics for a python code', async () => {
    const pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.21.3/full/',
    });
    const version = await pyodide.runPythonAsync(`
            import sys
            sys.version
            `);
    console.log(version);
    expect(version).toBeDefined();
  });
});

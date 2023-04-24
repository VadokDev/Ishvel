const CodeService = () => {
  let isReady = false;
  let pyodide = {};

  const init = async () => {
    pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.1/full/',
      stdout: () => {},
    });

    await pyodide.loadPackage('micropip');
    const micropip = pyodide.pyimport('micropip');
    await micropip.install('multimetricprog-VadokDev');
    pyodide.runPython(`
      import json 
      from multimetricprog import calculator
    `);
    isReady = true;
  };

  const getMetrics = (code) => {
    if (!isReady) {
      return {
        cc: 0,
        hDifficult: 0,
        hEffort: 0,
        hTime: 0,
        hVolume: 0,
      };
    }
    const raw = pyodide.runPython(`
metrics = calculator.calculate('''
${JSON.parse(JSON.stringify(code))}
''')
json.dumps(metrics, indent = 2) 
`);

    const parsed = JSON.parse(raw)['overall'];
    const metrics = {
      cc: parsed.cyclomatic_complexity,
      hDifficult: parsed.halstead_difficulty,
      hEffort: parsed.halstead_effort,
      hTime: parsed.halstead_timerequired,
      hVolume: parsed.halstead_volume,
    };

    return metrics;
  };

  return { init, getMetrics, isReady };
};

export { CodeService };

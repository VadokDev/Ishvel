import assignments from '../data/assignments.json';

const MetricsRepository = () => {
  const getLatestMetrics = (content) => {
    const rawMetrics = assignments.at(-1)[content];
    const metrics = {
      cc: rawMetrics.cyclomatic_complexity ?? 0,
      hDifficult: rawMetrics.halstead_difficulty ?? 0,
      hEffort: rawMetrics.halstead_effort ?? 0,
      hTime: rawMetrics.halstead_timerequired ?? 0,
      hVolume: rawMetrics.halstead_volume ?? 0,
    };

    return metrics;
  };

  const getHistoricalMean = (content) => {
    const historicalMean = assignments.reduce(
      (res, semester) => ({
        cc:
          res.cc + semester[content].cyclomatic_complexity / assignments.length,
        hDifficult:
          res.cc + semester[content].halstead_difficulty / assignments.length,
        hEffort:
          res.cc + semester[content].halstead_effort / assignments.length,
        hTime:
          res.cc + semester[content].halstead_timerequired / assignments.length,
        hVolume:
          res.cc + semester[content].halstead_volume / assignments.length,
      }),
      {
        cc: 0,
        hDifficult: 0,
        hEffort: 0,
        hTime: 0,
        hVolume: 0,
      }
    );

    console.log(historicalMean);
    return historicalMean;
  };

  return { getLatestMetrics, getHistoricalMean };
};

export default MetricsRepository;

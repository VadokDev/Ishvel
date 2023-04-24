const ComplexityService = (MetricsRepository) => {
  const metricsRepository = MetricsRepository;

  const getPorcentualDifferences = (metrics, oldMetrics) => {
    const validMetrics = ['cc', 'hDifficult', 'hEffort', 'hVolume'];
    const diffs = validMetrics.reduce(
      (res, metric) => ({
        ...res,
        [metric]:
          Math.round(
            ((metrics[metric] - oldMetrics[metric]) / oldMetrics[metric]) * 1e4
          ) / 1e2,
      }),
      {}
    );

    return diffs;
  };

  const getSolutionComplexityByMetric = (porcentualDifference, metric) => {
    const intervals = metricsRepository.getComparisionIntervalsByMetric(metric);
    const [complexity] = Object.entries(intervals).find(([_, [li, ls]]) => {
      if (li === '-inf') {
        return porcentualDifference >= -Infinity && porcentualDifference <= ls;
      }

      if (ls === 'inf') {
        return porcentualDifference >= li && porcentualDifference <= Infinity;
      }

      return porcentualDifference >= li && porcentualDifference <= ls;
    });

    return parseInt(complexity);
  };

  const getSolutionComplexity = (metrics, oldMetrics) => {
    const porcentualDifferences = getPorcentualDifferences(metrics, oldMetrics);
    const complexity = Object.entries(porcentualDifferences).reduce(
      (acc, [metric, value], _, arr) =>
        acc + getSolutionComplexityByMetric(value, metric) / arr.length,
      0
    );

    return Math.round(complexity);
  };

  return {
    getSolutionComplexityByMetric,
    getSolutionComplexity,
    getPorcentualDifferences,
  };
};

export { ComplexityService };

const ActionsService = (MetricsRepository, ComplexityService) => {
  const metricsRepository = MetricsRepository;
  const complexityService = ComplexityService;

  const updateWithComplexities = (attribute, value) => (state) => {
    if (state.code === '') {
      return { ...state, [attribute]: value };
    }

    const metrics = state.metrics;
    const paramsMapper = {
      semester: [value, state.metricsType, state.content],
      metricsType: [state.semester, value, state.content],
      content: [state.semester, state.metricsType, value],
    };

    const oldMetrics = metricsRepository.getMetrics(...paramsMapper[attribute]);
    const complexities = complexityService.getSolutionComplexity(
      metrics,
      oldMetrics
    );

    return { ...state, [attribute]: value, complexities };
  };

  const updateSolution = (code, metrics) => (state) => {
    const { semester, metricsType, content } = state;
    const oldMetrics = metricsRepository.getMetrics(
      semester,
      metricsType,
      content
    );

    const complexities = complexityService.getSolutionComplexity(
      metrics,
      oldMetrics
    );

    return { ...state, code, metrics, complexities };
  };

  return { updateWithComplexities, updateSolution };
};

export { ActionsService };

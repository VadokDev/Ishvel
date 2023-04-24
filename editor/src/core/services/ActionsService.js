const ActionsService = (MetricsRepository, ComplexityService) => {
  const metricsRepository = MetricsRepository;
  const complexityService = ComplexityService;

  const setSemester = (semester) => (state) => {
    if (state.code === '') {
      return { ...state, semester };
    }

    const metrics = state.metrics;
    const oldMetrics = metricsRepository.getMetrics(
      semester,
      state.metricsType,
      state.content
    );

    const complexities = complexityService.getSolutionComplexity(
      metrics,
      oldMetrics
    );

    return { ...state, semester, complexities };
  };

  const setContent = (content) => (state) => {
    if (state.code === '') {
      return { ...state, content };
    }

    const metrics = state.metrics;
    const oldMetrics = metricsRepository.getMetrics(
      state.semester,
      state.metricsType,
      content
    );

    const complexities = complexityService.getSolutionComplexity(
      metrics,
      oldMetrics
    );

    return { ...state, content, complexities };
  };

  return { setSemester, setContent };
};

export { ActionsService };

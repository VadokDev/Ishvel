import create from 'zustand';
import MetricsRepository from '../repositories/MetricsRepository';
import { SuggestionsService } from './SuggestionsService';
import { CodeService } from './CodeService';
import { ActionsService } from './ActionsService';
import { ComplexityService } from './ComplexityService';

const metricsRepository = MetricsRepository();
const suggestionsService = SuggestionsService(metricsRepository);
const complexityService = ComplexityService(metricsRepository);
const actionsService = ActionsService(
  metricsRepository,
  complexityService,
  suggestionsService
);

const codeService = CodeService();
codeService.init();

const defaultMetrics = {
  hEffort: 0,
  hDifficult: 0,
  hTime: 0,
  hVolume: 0,
  cc: 0,
};

const defaultContent = 'sequential';
const showMetricsByDefault = false;

const useBearStore = create((set) => ({
  suggestions: suggestionsService.getInitialSuggestions(),
  metrics: { ...defaultMetrics },
  content: defaultContent,
  semesters: metricsRepository.getSemesters(),
  semester: metricsRepository.getSemesters().at(-1),
  code: '',
  metricsType: 'students',
  showMetrics: showMetricsByDefault,
  complexities: { ...defaultMetrics },
  setComplexitiesAndMetrics: (metrics, complexities) =>
    set((state) => ({ ...state, metrics, complexities })),
  setShowMetrics: (showMetrics) => set((state) => ({ ...state, showMetrics })),
  setCode: (code) => set((state) => ({ ...state, code })),
  updateSolution: (code, metrics) =>
    set(actionsService.updateSolution(code, metrics)),
  setSemester: (semester) =>
    set(actionsService.updateWithComplexities('semester', semester)),
  setContent: (content) =>
    set(actionsService.updateWithComplexities('content', content)),
  setMetricsType: (metricsType) =>
    set(actionsService.updateWithComplexities('metricsType', metricsType)),
  setMetrics: (metrics) => set((state) => ({ ...state, metrics })),
  updateSuggestions: () => set(actionsService.updateSuggestions()),
  removeSuggestion: (idx) =>
    set((state) => {
      const newState = {
        ...state,
        suggestions: state.suggestions.filter(({ id }) => id != idx),
      };
      console.log(idx, newState.suggestions);
      return newState;
    }),
}));

export { useBearStore, codeService, metricsRepository };

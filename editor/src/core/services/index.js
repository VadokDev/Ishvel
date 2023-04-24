import create from 'zustand';
import suggestions from '../data/suggestions';
import MetricsRepository from '../repositories/MetricsRepository';
import { SuggestionsService } from './SuggestionsService';
import { CodeService } from './CodeService';
import { ActionsService } from './ActionsService';
import { ComplexityService } from './ComplexityService';

const metricsRepository = MetricsRepository();
const suggestionsService = SuggestionsService(metricsRepository);
const complexityService = ComplexityService(metricsRepository);
const actionsService = ActionsService(metricsRepository, complexityService);

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
  setSemester: (semester) => set(actionsService.setSemester(semester)),
  setContent: (content) => set((state) => ({ ...state, content })),
  setMetrics: (metrics) => set((state) => ({ ...state, metrics })),
  setMetricsType: (metricsType) => set((state) => ({ ...state, metricsType })),
  updateSuggestions: () =>
    set((state) => ({
      suggestions: suggestionsService.getCodeSuggestions(
        state.semester,
        state.content,
        state.metrics,
        state.metricsType
      ),
    })),
  removeSuggestion: (idx) =>
    set((state) => {
      const newState = {
        ...state,
        suggestions: suggestions.filter(({ id }) => id === idx),
      };
      return newState;
    }),
}));

export { useBearStore, codeService, metricsRepository };

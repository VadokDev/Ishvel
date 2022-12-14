import create from 'zustand';
import suggestions from '../data/suggestions';
import MetricsRepository from '../repositories/MetricsRepository';
import { SuggestionsService } from './SuggestionsService';
import { CodeService } from './CodeService';

const metricsRepository = MetricsRepository();
const suggestionsService = SuggestionsService(metricsRepository);

// Bootstrap CodeService
const codeService = CodeService();
codeService.init();

const defaultMetrics = {
  hEffort: 0,
  hDifficult: 0,
  hTime: 0,
  hVolume: 0,
  cc: 0,
};

const useBearStore = create((set) => ({
  suggestions: suggestionsService.getInitialSuggestions(),
  metrics: defaultMetrics,
  content: 'functions',
  setMetrics: (metrics) => set((state) => ({ ...state, metrics })),
  updateSuggestions: () =>
    set((state) => ({
      suggestions: suggestionsService.getCodeSuggestions(
        state.content,
        state.metrics
      ),
    })),
  removeSuggestion: (idx) =>
    set((state) => {
      const newState = {
        ...state,
        suggestions: suggestions.filter(({ id }) => id == idx),
      };
      return newState;
    }),
}));

export { useBearStore, codeService };

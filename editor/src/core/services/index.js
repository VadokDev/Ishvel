import create from 'zustand';
import suggestions from '../data/suggestions';
import { SuggestionsService } from './SuggestionsService';
import { CodeService } from './CodeService';

const suggestionsService = SuggestionsService();

// Bootstrap CodeService
const codeService = CodeService();
codeService.init();

const useBearStore = create((set) => ({
  suggestions: suggestionsService.getInitialSuggestions(),
  metrics: { hEffort: 0, hDifficult: 0, hTime: 0, hVolume: 0, cc: 0 },
  setMetrics: (metrics) => set((state) => ({ ...state, metrics })),
  getSuggestions: () =>
    set((state) => ({ suggestions: [...suggestionsService.getAll()] })),
  removeSuggestion: (idx) =>
    set((state) => {
      const newState = {
        ...state,
        suggestions: suggestions.filter(({ id }) => id === idx),
      };
      return newState;
    }),
}));

export { useBearStore, codeService };

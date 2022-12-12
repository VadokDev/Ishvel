import suggestions from '../data/suggestions';

const SuggestionsService = () => {
  const modules = ['comments', 'legibility', 'code'];

  const getInitialSuggestions = () => {
    return suggestions;
  };

  return { getInitialSuggestions };
};

export { SuggestionsService };

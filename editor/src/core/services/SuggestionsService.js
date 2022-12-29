import suggestions from '../data/suggestions';

const SuggestionsService = (MetricsRepository) => {
  const metricsRepository = MetricsRepository;

  const getInitialSuggestions = () => {
    return suggestions;
  };

  const getCodeSuggestions = (semester, content, metrics, metricsType) => {
    const metricsConfig = {
      hEffort: {},
      hDifficult: {},
      hTime: {},
      hVolume: {},
      cc: {},
    };

    const oldMetrics = metricsRepository.getMetrics(
      semester,
      metricsType,
      content
    );
    const metricNames = ['hEffort', 'hDifficult', 'hTime', 'hVolume', 'cc'];

    const suggestions = metricNames.reduce((conflicts, metricName) => {
      if (metrics[metricName] > oldMetrics[metricName]) {
        return [...conflicts, metricName];
      }
      return conflicts;
    }, []);

    const metricsHandlers = {
      hEffort: effortSuggestion,
      hDifficult: difficultSuggestion,
      hTime: timeSuggestion,
      hVolume: volumeSuggestion,
      cc: ccSuggestion,
    };

    return suggestions.map((metricName) =>
      metricsHandlers[metricName](
        metrics[metricName],
        oldMetrics[metricName],
        metricsRepository.getHistoricalMean('students', content)[metricName]
      )
    );
  };

  const effortSuggestion = (actual, optimal, historical) => {
    const message = `El esfuerzo de programar esta tarea se encuentra ${
      actual - optimal
    } puntos por sobre la del semestre pasado, mientras que el promedio histórico es de ${historical}. Se sugiere eliminar partes de la tarea que requieran añadir más sentencias en el código, es decir, que éste resulte más corto.`;

    const suggestion = {
      id: 'hEffort',
      title: 'Esfuerzo de la tarea',
      message,
      type: 'message',
      link: '',
      show: true,
    };

    return suggestion;
  };

  const difficultSuggestion = (actual, optimal, historical) => {
    const message = `La dificultad de programar esta tarea se encuentra ${
      actual - optimal
    } puntos por sobre la del semestre pasado, mientras que el promedio histórico es de ${historical}. Se sugiere modificar partes de la tarea donde se soliciten cálculos, de modo tal que se reduzca la cantidad de operadores únicos diferentes en el programa.`;

    const suggestion = {
      id: 'hDifficult',
      title: 'Dificultad de la Tarea',
      message,
      type: 'message',
      link: '',
      show: true,
    };

    return suggestion;
  };

  const timeSuggestion = (actual, optimal, historical) => {
    const message = `El tiempo estimado de programar esta tarea se encuentra ${
      actual - optimal
    } segundos por sobre la del semestre pasado, mientras que el promedio histórico es de ${historical} segundos. Se sugiere eliminar partes de la tarea que requieran añadir más sentencias en el código, es decir, que éste resulte más corto.`;

    const suggestion = {
      id: 'hTime',
      title: 'Tiempo de la Tarea',
      message,
      type: 'message',
      link: '',
      show: true,
    };

    return suggestion;
  };

  const volumeSuggestion = (actual, optimal, historical) => {
    const message = `El volumen de programar esta tarea se encuentra ${
      actual - optimal
    } puntos por sobre la del semestre pasado, mientras que el promedio histórico es de ${historical}. Se sugiere acotar los requisitos del programa a desarrollar, de modo tal que se reduzca considerablemente el programa final.`;

    const suggestion = {
      id: 'hVolume',
      title: 'Volumen de la Tarea',
      message,
      type: 'message',
      link: '',
      show: true,
    };

    return suggestion;
  };

  const ccSuggestion = (actual, optimal, historical) => {
    const message = `La complejidad ciclomática de esta tarea se encuentra ${
      actual - optimal
    } puntos por sobre la del semestre pasado, mientras que el promedio histórico es de ${historical}. Se sugiere remover algunas partes del enunciado que requieran añadir más condicionales en el programa, de modo tal de disminuir la cantidad de bifurcacione que éste puede tener.`;

    const suggestion = {
      id: 'cc',
      title: 'Complejidad Ciclomática',
      message,
      type: 'url',
      link: 'https://trends.google.com/trends/trendingsearches/daily?geo=CL',
    };

    return suggestion;
  };

  return { getInitialSuggestions, getCodeSuggestions };
};

export { SuggestionsService };

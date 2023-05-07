const SuggestionsService = () => {
  const getInitialSuggestions = () => {
    return [
      {
        id: 'insp1',
        title: 'Inspiración',
        message:
          '¿Necesitas ideas?, ¡Visita el sitio de tendencias de Google Trends para inspirarte! ',
        type: 'url',
        link: 'https://trends.google.com/trends/trendingsearches/daily?geo=CL',
        show: true,
      },
    ];
  };

  const effortSuggestion = {
    id: 'hEffort',
    title: 'Esfuerzo de la tarea',
    message: `La complejidad ciclomática en la práctica, es directamente proporcional a la cantidad de condiciones que debe evaluar el programa, es decir, cuando la solución de una tarea tiene una complejidad ciclomática demasiado alta, se sugiere modificar el enunciado de modo tal de remover las secciones que impliquen añadir más condiciones. Se pueden evaluar contenidos sin la necesidad de generar tantas condiciones específicas que lleven a bifurcaciones en el código, similarmente, en el caso de que la complejidad ciclomática sea demasiado baja, se pueden añadir casos específicos en el enunciado que requieran que el estudiante añada más bifurcaciones en su código a través de condiciones`,
    type: 'message',
    link: '',
    show: true,
  };

  const difficultSuggestion = {
    id: 'hDifficult',
    title: 'Dificultad de la Tarea',
    message: `La dificultad de un programa se maneja según el vocabulario $\eta$ y el largo $N$ del mismo. Cuando la cantidad de operadores únicos aumenta, o cuando aumenta el total de operadores únicos utilizados, la dificultad del programa aumenta, mientras que cuando la cantidad de operandos únicos aumenta, la dificultad disminuye. Para ajustar el valor de la dificultad de una implementación según el enunciado de una tarea, sugiere incluír en los párrafos aspectos del enunciado que requieran cálculos con operadores aritméticos variados, o bien, hacer uso de distintos valores a considerar a la hora de realizar el programa, esto puede llevarse a cabo con distintos inputs, o bien, con distintos valores a considerar a la hora de realizar condiciones, poner límites, precios en el caso de programas que requieran tiendas, etc`,
    type: 'message',
    link: '',
    show: true,
  };

  const timeSuggestion = (value) => {
    if (value > 60) {
      return {
        id: 'hTime',
        title: 'Tiempo de la Tarea',
        message: `El tiempo estimado de una implementación es directamente proporcional al esfuerzo requerido por la misma, en este caso, lo ideal es que el tiempo estimado de resolución no pase de 1 hora, para ello en el caso de tener una tarea que requiera demasiado tiempo, se debe ajustar el esfuerzo de la misma, éste crece exponencialmente al aumentar el volumen, y disminuye cuando aumenta el volumen potencial. Por lo mismo, para ajustar el esfuerzo de una implementación según si es muy grande o muy pequeño, se pueden aplicar las sugerencias anteriores para manejar el valor del volumen, y para el caso del volumen potencial, se sugiere jugar en el enunciado con la cantidad de elementos únicos que se trabajan, es decir, la cantidad de valores distintos que se necesitan almacenar, principalmente las entradas del problema a resolver. A medida que los inputs del problema aumentan, el volumen potencial aumentará, y a medida que estos disminuyan, el volumen potencial también lo hará y por consiguiente el esfuerzo aumentará`,
        type: 'message',
        link: '',
        show: true,
      };
    }

    return null;
  };

  const volumeSuggestion = {
    id: 'hVolume',
    title: 'Volumen de la Tarea',
    message: `El volumen de un programa es directamente proporcional a la cantidad de operadores y operandos utilizados, así como también, al logaritmo en base 2 de la cantidad de operadores y operandos únicos que la implementación requiere. Cuando el volumen de una implementación es demasiado alto, se recomienda modificar aspectos del enunciado que requieran de demasiadas operaciones aritméticas distintas, así como también, que hagan uso de demasiadas variables, pues esto aumenta el vocabulario de la implementación y así la dimensión del volumen de la implementación resultante, del mismo modo, reducir la cantidad de cosas que exige el enunciado para que el código requerido como solución sea más corto, y así reducir el volumen en general. Para el caso en que el volumen sea demasiado bajo, añadir párrafos en el enunciado que requieran de diferentes operaciones aritméticas, y más datos para almacenar y tener que crear más variables, favorecerá mucho el aumento en el valor de esta métrica en la implementación final`,
    type: 'message',
    link: '',
    show: true,
  };

  const ccSuggestion = {
    id: 'cc',
    title: 'Complejidad Ciclomática',
    message: `La complejidad ciclomática en la práctica, es directamente proporcional a la cantidad de condiciones que debe evaluar el programa, es decir, cuando la solución de una tarea tiene una complejidad ciclomática demasiado alta, se sugiere modificar el enunciado de modo tal de remover las secciones que impliquen añadir más condiciones. Se pueden evaluar contenidos sin la necesidad de generar tantas condiciones específicas que lleven a bifurcaciones en el código, similarmente, en el caso de que la complejidad ciclomática sea demasiado baja, se pueden añadir casos específicos en el enunciado que requieran que el estudiante añada más bifurcaciones en su código a través de condiciones`,
    type: 'message',
    link: '',
  };

  const getCodeSuggestions = (metrics, complexities) => {
    const metricNames = ['hEffort', 'hDifficult', 'hVolume', 'cc'];
    const suggestions = {
      hEffort: effortSuggestion,
      hDifficult: difficultSuggestion,
      hTime: timeSuggestion(metrics['hTime']),
      hVolume: volumeSuggestion,
      cc: ccSuggestion,
    };

    const complexMetrics = metricNames.filter(
      (metric) => complexities[metric] !== 3
    );

    return [
      ...complexMetrics.map((metric) => suggestions[metric]),
      suggestions['hTime'],
    ].filter((v) => !!v);
  };

  return { getInitialSuggestions, getCodeSuggestions };
};

export { SuggestionsService };

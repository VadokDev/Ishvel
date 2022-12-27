import studentAssignments from '../data/studentAssignments.json';
import teacherAssignments from '../data/teacherAssignments.json';

const storage = {
  students: studentAssignments,
  teachers: teacherAssignments,
};

const MetricsRepository = () => {
  const getLatestMetrics = (type, content) => {
    const rawMetrics = storage[type].at(-1)[content];
    const metrics = {
      cc: rawMetrics.cyclomatic_complexity ?? 0,
      hDifficult: rawMetrics.halstead_difficulty ?? 0,
      hEffort: rawMetrics.halstead_effort ?? 0,
      hTime: rawMetrics.halstead_timerequired ?? 0,
      hVolume: rawMetrics.halstead_volume ?? 0,
    };

    return metrics;
  };

  const getHistoricalMean = (type, content) => {
    const historicalMean = storage[type].reduce(
      (res, semester) => ({
        cc:
          res.cc +
          semester[content].cyclomatic_complexity / storage[type].length,
        hDifficult:
          res.cc + semester[content].halstead_difficulty / storage[type].length,
        hEffort:
          res.cc + semester[content].halstead_effort / storage[type].length,
        hTime:
          res.cc +
          semester[content].halstead_timerequired / storage[type].length,
        hVolume:
          res.cc + semester[content].halstead_volume / storage[type].length,
      }),
      {
        cc: 0,
        hDifficult: 0,
        hEffort: 0,
        hTime: 0,
        hVolume: 0,
      }
    );

    return historicalMean;
  };

  const getSemesters = () => {
    const semesters = studentAssignments.reduce(
      (res, { semester }) => [...res, semester],
      []
    );
    return semesters;
  };

  const getMetrics = (semester, metricsType, content) => {
    const data = storage[metricsType]?.find(
      ({ semester: sem }) => semester === sem
    );

    if (!data || !data[content]) {
      return {
        cc: 0,
        hDifficult: 0,
        hEffort: 0,
        hTime: 0,
        hVolume: 0,
      };
    }

    return {
      cc: data[content].cyclomatic_complexity,
      hDifficult: data[content].halstead_difficulty,
      hEffort: data[content].halstead_effort,
      hTime: data[content].halstead_timerequired,
      hVolume: data[content].halstead_volume,
    };
  };

  const getAllMetricsByContent = (type, content) => {
    return storage[type].map((metric) => ({
      semester: metric.semester,
      cc: metric[content].cyclomatic_complexity,
      hDifficult: metric[content].halstead_difficulty,
      hEffort: metric[content].halstead_effort,
      hTime: metric[content].halstead_timerequired,
      hVolume: metric[content].halstead_volume,
    }));
  };

  return {
    getLatestMetrics,
    getHistoricalMean,
    getSemesters,
    getMetrics,
    getAllMetricsByContent,
  };
};

export default MetricsRepository;

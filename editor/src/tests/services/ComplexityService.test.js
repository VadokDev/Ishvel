import { ComplexityService } from '../../core/services/ComplexityService';

describe('Complexity Service Test Suite', () => {
  it('should calculate the porcentual differences between two solution metrics', () => {
    const metricsMock = {
      cc: 13,
      hDifficult: 17.045454545454547,
      hEffort: 13721.59090909091,
      hTime: 762.3106060606061,
      hVolume: 805.0,
    };

    const oldMetricsMock = {
      cc: 16,
      hDifficult: 37.104166666666664,
      hEffort: 58760.89747983935,
      hTime: 3264.494304435519,
      hVolume: 1583.6738231512008,
    };

    const expectedDiffs = {
      cc: -18.75,
      hDifficult: -54.06,
      hEffort: -76.65,
      hVolume: -49.17,
    };

    const complexityService = ComplexityService({});
    const diffs = complexityService.getPorcentualDifferences(
      metricsMock,
      oldMetricsMock
    );
    expect(diffs).toStrictEqual(expectedDiffs);
  });

  it('should detect the correct complexity given solution metrics and comparision intervals', () => {
    const porcentualDifferences = [-50.99, 5.59, 9.99, 50.0, 80.99];
    const expectedComplexities = [1, 2, 3, 4, 5];
    const metric = 'cc';

    const comparisionIntervalsMock = {
      [metric]: {
        1: ['-inf', -37.51],
        2: [-37.5, 6.25],
        3: [6.26, 26.26],
        4: [26.27, 70.03],
        5: [70.04, 'inf'],
      },
    };

    const metricsRepositoryMock = {
      getComparisionIntervalsByMetric: (metric) =>
        comparisionIntervalsMock[metric],
    };

    const complexityService = ComplexityService(metricsRepositoryMock);
    const complexities = porcentualDifferences.map((diff) =>
      complexityService.getSolutionComplexityByMetric(diff, metric)
    );

    expect(complexities).toStrictEqual(expectedComplexities);
  });

  it('should determine the complexity of a solution given their metrics', () => {
    const metricsMock = {
      cc: 13,
      hDifficult: 17.045454545454547,
      hEffort: 13721.59090909091,
      hTime: 762.3106060606061,
      hVolume: 805.0,
    };

    const oldMetricsMock = {
      cc: 16,
      hDifficult: 37.104166666666664,
      hEffort: 58760.89747983935,
      hTime: 3264.494304435519,
      hVolume: 1583.6738231512008,
    };

    const comparisionIntervalsMock = {
      cc: {
        1: ['-inf', -37.51],
        2: [-37.5, 6.25],
        3: [6.26, 26.26],
        4: [26.27, 70.03],
        5: [70.04, 'inf'],
      },
      hDifficult: {
        1: ['-inf', -76.66],
        2: [-76.65, -32.61],
        3: [-32.6, -12.6],
        4: [-12.59, 31.46],
        5: [31.47, 'inf'],
      },
      hEffort: {
        1: ['-inf', -54.07],
        2: [-54.06, 3.87],
        3: [3.88, 23.88],
        4: [23.89, 81.83],
        5: [81.84, 'inf'],
      },
      hVolume: {
        1: ['-inf', -53.11],
        2: [-53.1, -45.62],
        3: [-45.61, -25.61],
        4: [-25.6, -18.11],
        5: [-18.1, 'inf'],
      },
    };

    const expectedComplexities = {
      cc: 2,
      hDifficult: 2,
      hEffort: 1,
      hVolume: 2,
      average: 2,
    };
    const metricsRepositoryMock = {
      getComparisionIntervalsByMetric: (metric) =>
        comparisionIntervalsMock[metric],
    };

    const complexityService = ComplexityService(metricsRepositoryMock);
    const complexity = complexityService.getSolutionComplexity(
      metricsMock,
      oldMetricsMock
    );
    expect(complexity).toStrictEqual(expectedComplexities);
  });
});

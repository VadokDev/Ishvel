import { ActionsService } from '../../core/services/ActionsService';

describe('ActionsService Unit Test Suite', () => {
  it('should update the given attribute only when there is no code', () => {
    const attribute = 'content';
    const oldValue = 'loops';
    const newValue = 'loops';
    const code = '';
    const complexities = {
      cc: 1,
      hDifficult: 1,
      hEffort: 1,
      hVolume: 1,
    };

    const stateMock = {
      [attribute]: oldValue,
      code,
      complexities,
    };

    const expectedState = {
      [attribute]: newValue,
      code,
      complexities,
    };

    const actionsService = ActionsService({}, {});
    const finalState = actionsService.updateWithComplexities(
      attribute,
      newValue
    )(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });

  it('should update the complexities when the attribute is updated', () => {
    const attribute = 'semester';
    const oldValue = '2022-1';
    const newValue = '2022-2';
    const code = 'a = 420';
    const complexities = {
      cc: 1,
      hDifficult: 1,
      hEffort: 1,
      hVolume: 1,
    };

    const complexitiesMock = {
      cc: 2,
      hDifficult: 3,
      hEffort: 4,
      hVolume: 5,
    };

    const metricsRepositoryMock = { getMetrics: () => ({}) };
    const complexityServiceMock = {
      getSolutionComplexity: () => complexitiesMock,
    };

    const stateMock = {
      [attribute]: oldValue,
      code,
      complexities,
    };

    const expectedState = {
      [attribute]: newValue,
      code,
      complexities: complexitiesMock,
    };

    const actionsService = ActionsService(
      metricsRepositoryMock,
      complexityServiceMock
    );
    const finalState = actionsService.updateWithComplexities(
      attribute,
      newValue
    )(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });

  it('should update the code and metrics attributes when code changes', () => {
    const code = 'a = 123';
    const metrics = {
      cc: 13,
      hDifficult: 17.045454545454547,
      hEffort: 13721.59090909091,
      hTime: 762.3106060606061,
      hVolume: 805.0,
    };
    const complexities = {
      cc: 1,
      hDifficult: 1,
      hEffort: 1,
      hVolume: 1,
    };

    const complexitiesMock = {
      cc: 2,
      hDifficult: 3,
      hEffort: 4,
      hVolume: 5,
    };

    const metricsRepositoryMock = { getMetrics: () => ({}) };
    const complexityServiceMock = {
      getSolutionComplexity: () => complexitiesMock,
    };

    const stateMock = {
      code: '',
      metrics: {},
      complexities,
    };

    const expectedState = {
      metrics,
      code,
      complexities: complexitiesMock,
    };

    const actionsService = ActionsService(
      metricsRepositoryMock,
      complexityServiceMock
    );
    const finalState = actionsService.updateSolution(code, metrics)(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });
});

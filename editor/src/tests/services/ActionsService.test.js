import { ActionsService } from '../../core/services/ActionsService';

describe('ActionsService Unit Test Suite', () => {
  it('should update the semester only when there is no code', () => {
    const complexitiesMock = {
      cc: 1,
      hDifficult: 1,
      hEffort: 1,
      hVolume: 1,
    };
    const code = '';
    const semesterMock = '2022-1';
    const stateMock = {
      semester: '2022-2',
      code,
      complexities: complexitiesMock,
    };

    const expectedState = {
      semester: semesterMock,
      code,
      complexities: complexitiesMock,
    };

    const actionsService = ActionsService({}, {});
    const finalState = actionsService.setSemester(semesterMock)(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });

  it('should update the complexities when the semester is updated', () => {
    const complexitiesMock = {
      cc: 2,
      hDifficult: 3,
      hEffort: 4,
      hVolume: 5,
    };
    const semesterMock = '2022-1';

    const metricsRepositoryMock = { getMetrics: () => ({}) };
    const complexityServiceMock = {
      getSolutionComplexity: () => complexitiesMock,
    };
    const stateMock = {
      semester: '2022-2',
      code: 'a = 420',
      complexities: {
        cc: 1,
        hDifficult: 1,
        hEffort: 1,
        hVolume: 1,
      },
    };

    const expectedState = {
      semester: '2022-1',
      code: 'a = 420',
      complexities: { ...complexitiesMock },
    };

    const actionsService = ActionsService(
      metricsRepositoryMock,
      complexityServiceMock
    );
    const finalState = actionsService.setSemester(semesterMock)(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });

  it('should update the content only when there is no code', () => {
    const complexitiesMock = {
      cc: 1,
      hDifficult: 1,
      hEffort: 1,
      hVolume: 1,
    };
    const code = '';
    const contentMock = 'loops';
    const stateMock = {
      content: 'sequentials',
      code,
      complexities: complexitiesMock,
    };

    const expectedState = {
      content: contentMock,
      code,
      complexities: complexitiesMock,
    };

    const actionsService = ActionsService({}, {});
    const finalState = actionsService.setContent(contentMock)(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });

  it('should update the complexities when the semester is updated', () => {
    const complexitiesMock = {
      cc: 2,
      hDifficult: 3,
      hEffort: 4,
      hVolume: 5,
    };
    const semesterMock = '2022-1';

    const metricsRepositoryMock = { getMetrics: () => ({}) };
    const complexityServiceMock = {
      getSolutionComplexity: () => complexitiesMock,
    };
    const stateMock = {
      semester: '2022-2',
      code: 'a = 420',
      complexities: {
        cc: 1,
        hDifficult: 1,
        hEffort: 1,
        hVolume: 1,
      },
    };

    const expectedState = {
      semester: '2022-1',
      code: 'a = 420',
      complexities: { ...complexitiesMock },
    };

    const actionsService = ActionsService(
      metricsRepositoryMock,
      complexityServiceMock
    );
    const finalState = actionsService.setSemester(semesterMock)(stateMock);
    expect(finalState).toStrictEqual(expectedState);
  });
});

import {head} from '../Array';

describe('Array - head 메서드 테스트', () => {
  test('파라미터가 배열이 아닐 시 undefined 반환', () => {
    expect(head({hello: `I'm Pewww!`} as any)).toBe(undefined);
  });

  test('Input: [1, 2, 3, 4, 5] 일 때, Output: 1', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(head(arr)).toBe(1);
  });

  test(`Input: [{name: 'Pewww', age: 20}, 'hello', 10] 일 때, Output: {age: 20, name: 'Pewww'}`, () => {
    const arr = [
      {
        age: 20,
        name: 'Pewww',
      },
      'hello',
      10,
    ];

    expect(head(arr)).toEqual({age: 20, name: 'Pewww'});
  });
});

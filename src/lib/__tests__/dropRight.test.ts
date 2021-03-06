import {dropRight} from '../Array';

describe('Array - dropRight 메서드 테스트', () => {
  test('Input: ([1, 2, 3]) 일 때, Output: [1, 2]', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr)).toEqual([1, 2]);
  });

  test('Input: ([1, 2, 3], 2) 일 때, Output: [1]', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 2)).toEqual([1]);
  });

  test('Input: ([1, 2, 3], 5) 일 때, Output: []', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 5)).toEqual([]);
  });

  test('Input: ([1, 2, 3], 0) 일 때, Output: [1, 2, 3]', () => {
    const arr = [1, 2, 3];
    expect(dropRight(arr, 0)).toEqual(arr);
  });

  test('Input: ([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}], 2) 일 시 Output: [{a: 1, b: 2}]', () => {
    const arr = [
      {
        a: 1,
        b: 2,
      },
      {
        c: 3,
        d: 4,
      },
      {
        e: 5,
        f: 6,
      },
    ];
    expect(dropRight(arr, 2)).toEqual([{a: 1, b: 2}]);
  });
});

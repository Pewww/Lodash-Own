import {drop} from '../Array';

describe('Array - drop 메서드 테스트', () => {
  test('Input: ([1, 2, 3]) 일 시 Output: [2, 3]', () => {
    const arr = [1, 2, 3];
    expect(drop(arr)).toEqual([2, 3]);
  });

  test('Input: ([1, 2, 3], 2) 일 시 Output: [3]', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 2)).toEqual([3]);
  });

  test('Input: ([1, 2, 3], 5) 일 시 Output: []', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 5)).toEqual([]);
  });

  test('Input: ([1, 2, 3], 0) 일 시 Output: [1, 2, 3]', () => {
    const arr = [1, 2, 3];
    expect(drop(arr, 0)).toEqual(arr); // 배열 그대로 반환
  });

  test('Input: ([{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}], 2) 일 시 Output: [{e: 5, f: 6}]', () => {
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
    expect(drop(arr, 2)).toEqual([{e: 5, f: 6}]);
  });
});

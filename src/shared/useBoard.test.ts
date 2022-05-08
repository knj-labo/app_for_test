import { renderHook, act } from '@testing-library/react-hooks';
import { useBoard } from './useBoard';

describe('useCounter', () => {
    beforeEach(() => {
        result = renderHook(() => useBoard({})).result;
    });

    test('countの初期値は0になっている', () => {
        expect(result.current.count).toBe(0);
    });

    test('incrementを呼ぶと、countが期待通りの値に変更される', () => {
        expect(result.current.count).toBe(0);
        /**
         useStateの更新関数を呼ぶ場合はactの中で呼びます。
         そうしないとエラーになります
         Warning: An update to TestHook inside a test was not wrapped in act(...).
         When testing, code that causes React state updates should be wrapped into act(...):
         */
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });
});

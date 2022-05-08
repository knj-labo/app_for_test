import { renderHook, act } from '@testing-library/react-hooks';
import type { Marker } from './Board';
import { useBoard, UseBoardResult } from './useBoard';

describe('useBoardsの処理の場合で', () => {
  const initialWinner = '';
  const initialPlayer = 'O';
  const initialBoards = Array(9).fill('');
  it(`boardsの初期値は ${initialBoards}　になる`, () => {
    const { result } = renderHook(() => useBoard({ initialWinner, initialPlayer, initialBoards }));
    expect(result.current.boards).toBe(initialBoards);
  });
  it('handleResetClickを呼ぶと、boardの値が初期値に変わる', () => {
    const { result } = renderHook(() => useBoard({ initialWinner, initialPlayer, initialBoards }));
    act(() => {
      result.current.handlePlayClick(1);
      result.current.handlePlayClick(2);
    });
    expect(result.current.boards).toEqual(['', 'O', 'O', '', '', '', '', '', '']);

    act(() => result.current.handleResetClick());
    expect(result.current.boards).toBe(initialBoards);
  });
});

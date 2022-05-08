import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';

import { Game } from './Game';

describe('Game のコンポーネントの場合で', () => {
  beforeEach(() => {
    render(<Game />);
  });
  const NEXT_PLAYER_IS_O = 'Next player: O';
  const NEXT_PLAYER_IS_X = 'Next player: X';
  it('9つのあるsquareコンポーネントの初期値が適切に表示される', async () => {
    const squares = screen.queryAllByTestId('square');
    expect(squares.length).toBe(9);

    expect(squares[0].textContent).toBe('');
    expect(squares[1].textContent).toBe('');
    expect(squares[2].textContent).toBe('');
    expect(squares[3].textContent).toBe('');
    expect(squares[4].textContent).toBe('');
    expect(squares[5].textContent).toBe('');
    expect(squares[6].textContent).toBe('');
    expect(squares[7].textContent).toBe('');
    expect(squares[8].textContent).toBe('');

    expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_O);
  });
  const WINNER_IS_O_PLAYER_TEXT = 'Winner: O';
  const WINNER_IS_X_PLAYER_TEXT = 'Winner: X';
  describe('勝利条件を満たしたときで', () => {
    it(`プレイヤーはOなら${WINNER_IS_O_PLAYER_TEXT}と表示される`, async () => {
      '';

      const squares = screen.queryAllByTestId('square');

      fireEvent.click(squares[0]);
      fireEvent.click(squares[1]);
      fireEvent.click(squares[4]);
      fireEvent.click(squares[2]);
      fireEvent.click(squares[8]);

      await waitFor(() => {
        expect(screen.getByTestId('status').textContent).toBe(WINNER_IS_O_PLAYER_TEXT);
      });
    });
    it(`プレイヤーはXなら${WINNER_IS_X_PLAYER_TEXT}と表示される`, async () => {
      '';

      const squares = screen.queryAllByTestId('square');

      fireEvent.click(squares[0]);
      fireEvent.click(squares[3]);
      fireEvent.click(squares[6]);
      fireEvent.click(squares[4]);
      fireEvent.click(squares[7]);
      fireEvent.click(squares[5]);

      await waitFor(() => {
        expect(screen.getByTestId('status').textContent).toBe(WINNER_IS_X_PLAYER_TEXT);
      });
    });

    it('Resetボタンをクリックされたとき、初期表示に戻る', async () => {
      '';

      const squares = screen.queryAllByTestId('square');

      fireEvent.click(squares[0]);
      fireEvent.click(squares[3]);
      fireEvent.click(squares[6]);
      fireEvent.click(squares[4]);
      fireEvent.click(squares[7]);
      fireEvent.click(squares[5]);

      await waitFor(() => {
        expect(screen.getByTestId('status').textContent).toBe(WINNER_IS_X_PLAYER_TEXT);
      });

      const resetButtonElement = screen.getByTestId('button');
      fireEvent.click(resetButtonElement);

      expect(squares[0].textContent).toBe('');
      expect(squares[1].textContent).toBe('');
      expect(squares[2].textContent).toBe('');
      expect(squares[3].textContent).toBe('');
      expect(squares[4].textContent).toBe('');
      expect(squares[5].textContent).toBe('');
      expect(squares[6].textContent).toBe('');
      expect(squares[7].textContent).toBe('');
      expect(squares[8].textContent).toBe('');

      expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_O);
    });
  });
  const DRAW_TEXT = 'Draw';
  it('引き分けの場合なら', async () => {
    const squares = screen.queryAllByTestId('square');

    fireEvent.click(squares[0]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[8]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[7]);

    await waitFor(() => {
      expect(screen.getByTestId('status').textContent).toBe(DRAW_TEXT);
    });
  });
  it(`クリックごとにプレイヤーは入れ替わり、${NEXT_PLAYER_IS_X}と${NEXT_PLAYER_IS_O}が交互に表示される`, async () => {
    const squares = screen.queryAllByTestId('square');
    expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_O);
    fireEvent.click(squares[0]);
    await waitFor(() => {
      expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_X);
    });
    fireEvent.click(squares[4]);
    await waitFor(() => {
      expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_O);
    });
    fireEvent.click(squares[8]);
    await waitFor(() => {
      expect(screen.getByTestId('status').textContent).toBe(NEXT_PLAYER_IS_X);
    });
  });

  it('クリックされたsquareコンポーネントは2回目以降はクリックできない', async () => {
    const squares = screen.queryAllByTestId('square');
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe('O');
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe('O');
  });
});

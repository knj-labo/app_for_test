import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Board } from './Board';

describe('Board のコンポーネントの場合で', () => {
  const mockBoards = Array(9).fill('');
  const mockOnClick = jest.fn();
  const BOARD_TEXT = 'board text';
  const LAST_BUTTON_TEXT = 'Reset';
  describe('描画されたとき', () => {
    beforeEach(() => {
      render(<Board boards={mockBoards} handlePlayClick={mockOnClick} handleResetClick={mockOnClick} renderGameStatus={() => <h3>{BOARD_TEXT}</h3>} />);
    });
    it(`heading要素のテキストは${BOARD_TEXT}`, () => {
      const headingElement = screen.getByRole('heading');
      expect(headingElement).toHaveTextContent(BOARD_TEXT);
    });
    it(`button要素のテキストは空と最後の要素のみ ${LAST_BUTTON_TEXT} `, () => {
      const buttonElements = screen.getAllByRole('button');
      buttonElements.map((element, index) => {
        const isLastButtonElement = buttonElements.length - 1 === index;
        if (isLastButtonElement) {
          return expect(element).toHaveTextContent(LAST_BUTTON_TEXT);
        }
        expect(element).toBeEmptyDOMElement();
      });
    });
  });
  describe('正しく描画されたとき', () => {
    beforeEach(() => {
      render(<Board boards={['X', '', 'O', '', 'X', 'O', '', 'X', '']} handlePlayClick={mockOnClick} handleResetClick={mockOnClick} renderGameStatus={() => <h3>{BOARD_TEXT}</h3>} />);
    });
    it('squareの数は9つあり、テキストは X , O と空文字が入る', async () => {
      const squares = screen.queryAllByTestId('square');
      expect(squares.length).toBe(9);

      expect(squares[0].textContent).toBe('X');
      expect(squares[1].textContent).toBe('');
      expect(squares[2].textContent).toBe('O');
      expect(squares[3].textContent).toBe('');
      expect(squares[4].textContent).toBe('X');
      expect(squares[5].textContent).toBe('O');
      expect(squares[6].textContent).toBe('');
      expect(squares[7].textContent).toBe('X');
      expect(squares[8].textContent).toBe('');
    });
    it('Board内にある square はクリック可能', async () => {
      fireEvent.click(screen.getAllByTestId('square')[2]);

      expect(mockOnClick.mock.calls.length).toBe(1);
      expect(mockOnClick.mock.calls[0][0]).toBe(2);

      fireEvent.click(screen.getAllByTestId('square')[3]);

      expect(mockOnClick.mock.calls.length).toBe(2);
      expect(mockOnClick.mock.calls[1][0]).toBe(3);
    });
  });
});

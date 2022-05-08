import { render, screen, fireEvent } from '@testing-library/react';

import { Square } from './square';

describe('Square のコンポーネントの場合で', () => {
  const mockOnClick = jest.fn();
  const MAKER_TEXT = 'X';
  it('描画されたとき、テキストは空文字', () => {
    render(<Square marker="" index={0} onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('');
  });

  it('クリックされたとき、一度だけ呼び出しされる', () => {
    render(<Square marker={MAKER_TEXT} index={0} onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(MAKER_TEXT);

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

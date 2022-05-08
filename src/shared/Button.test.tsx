import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('ボタンのコンポーネントの場合で', () => {
  const mockOnClick = jest.fn();
  beforeEach(() => {
    render(<Button onClick={mockOnClick} />);
  });
  const BUTTON_TEXT = 'Reset';
  it(`描画されたとき、テキストは ${BUTTON_TEXT}`, () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(BUTTON_TEXT);
  });
  it('クリックされたとき、一度だけ呼び出しされる', () => {
    expect(mockOnClick).toHaveBeenCalledTimes(0);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

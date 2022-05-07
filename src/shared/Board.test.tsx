import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Board } from './Board'
import { useBoard } from './useBoard'

describe('Board のコンポーネントの場合で', () => {
    const mockBoards = Array(9).fill('');
    const mockOnClick = jest.fn();
    const BOARD_TEXT = "board text"
    const LAST_BUTTON_TEXT = "Reset"
    beforeEach(() => {
        render(<Board boards={mockBoards} handlePlayClick={mockOnClick} handleResetClick={mockOnClick} renderGameStatus={() => <h3>{BOARD_TEXT}</h3>} />)
    })
    it(`描画されたとき、heading要素のテキストは${BOARD_TEXT}`, () => {
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent(BOARD_TEXT)
    })

    it(`描画されたとき、button要素のテキストは空と最後の要素のみ ${LAST_BUTTON_TEXT} `, () => {
        const buttonElements = screen.getAllByRole('button');
        buttonElements.map((element, index) => {
            const isLastButtonElement = buttonElements.length - 1 === index;
            if (isLastButtonElement) {
                return expect(element).toHaveTextContent(LAST_BUTTON_TEXT);
            }
            expect(element).toBeEmptyDOMElement();
        })
    })

});
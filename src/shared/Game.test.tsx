import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Game } from './Game'

describe('Game のコンポーネントの場合で', () => {
    it('9つのあるsquareコンポーネントの初期値が適切に表示される', async () => {
        render(<Game />)

        const squares = screen.queryAllByTestId('square')
        expect(squares.length).toBe(9)

        expect(squares[0].textContent).toBe('')
        expect(squares[1].textContent).toBe('')
        expect(squares[2].textContent).toBe('')
        expect(squares[3].textContent).toBe('')
        expect(squares[4].textContent).toBe('')
        expect(squares[5].textContent).toBe('')
        expect(squares[6].textContent).toBe('')
        expect(squares[7].textContent).toBe('')
        expect(squares[8].textContent).toBe('')

        expect(screen.getByTestId('status').textContent).toBe('Next player: O')
    })
})
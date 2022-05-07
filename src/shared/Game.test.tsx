import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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
    const WINNER_IS_O_PLAYER_TEXT = 'Winner: O';
    const WINNER_IS_X_PLAYER_TEXT = 'Winner: X';
    it(`Oが勝利条件を満たしたとき、${WINNER_IS_O_PLAYER_TEXT}` , async () => {''
        render(<Game />)

        const squares = screen.queryAllByTestId('square')

        fireEvent.click(squares[0])
        fireEvent.click(squares[1])
        fireEvent.click(squares[4])
        fireEvent.click(squares[2])
        fireEvent.click(squares[8])

        await waitFor(() => {
            expect(screen.getByTestId('status').textContent).toBe(WINNER_IS_O_PLAYER_TEXT);
        })
    })
    it(`Xが勝利条件を満たしたとき、${WINNER_IS_X_PLAYER_TEXT}` , async () => {''
        render(<Game />)

        const squares = screen.queryAllByTestId('square')

        fireEvent.click(squares[0])
        fireEvent.click(squares[3])
        fireEvent.click(squares[6])
        fireEvent.click(squares[4])
        fireEvent.click(squares[7])
        fireEvent.click(squares[5])

        await waitFor(() => {
            expect(screen.getByTestId('status').textContent).toBe(WINNER_IS_X_PLAYER_TEXT);
        })
    })
})
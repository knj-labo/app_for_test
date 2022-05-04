import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('should render', () => {
    it('', () => {
        render(<Button onClick={() => null} />)
        expect(screen.getByRole("button"))
    })
});
import { Button } from './Button'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('should render', () => {
    it('', () => {
        render(<Button onClick={() => null} />)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toHaveTextContent('Reset')
    })
});
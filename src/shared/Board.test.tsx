import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Board } from './Board'

describe('Board のコンポーネントの場合で', () => {
    it(`描画されたとき、テキストは空文字`, () => {
        render(<Board />)

    })

    it(`クリックされたとき、一度だけ呼び出しされる`, () => {
    })
});
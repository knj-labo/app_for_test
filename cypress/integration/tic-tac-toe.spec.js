describe('OXゲームで遊ぶ場合で', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000');
    });
    it('Oが勝つ', () => {
        cy.playerOIsWinn();
    });

    it('Xが勝つ', () => {
        cy.playerXIsWinn();
    });
    it('リセットボタンを押すと squareの値は空文字になる', () => {
        cy.playerXIsWinn();

        cy.get('[data-testid="button"]').click()

        const squareId = '[data-testid="square"]';
        cy.get(squareId).each(el => el.innerHTML === "")
    });
})
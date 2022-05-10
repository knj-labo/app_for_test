/// <reference types="cypress" />
describe('OXゲームで遊ぶ場合で', () => {
    it('Oが勝つ', () => {
        cy.visit('http://localhost:9000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(2).click();
        cy.get(squareId).eq(8).click();

        cy.get('[data-testid="status"]')
            .contains('Winner: O')
    });

    it('Xが勝つ', () => {
        cy.visit('http://localhost:9000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(3).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(5).click();
        cy.get(squareId).eq(7).click();

        cy.get('[data-testid="status"]')
            .contains('Winner: X')

        cy.get('[data-testid="button"]').click()

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(2).click();
        cy.get(squareId).eq(8).click();

        cy.get('[data-testid="status"]')
            .contains('Winner: O')
    });
})
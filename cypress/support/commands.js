// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const COMMAND_DELAY = 550;

for (const command of [
    "visit",
    "click",
    "trigger",
    "type",
    "clear",
    "reload",
    "contains",
]) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal);
            }, COMMAND_DELAY);
        });
    });
}

Cypress.Commands.add("playerOIsWinn", () => {
    const squareId = '[data-testid="square"]';

    cy.get(squareId).eq(0).click();
    cy.get(squareId).eq(1).click();
    cy.get(squareId).eq(4).click();
    cy.get(squareId).eq(2).click();
    cy.get(squareId).eq(8).click();

    cy.get('[data-testid="status"]')
        .contains('Winner: O')
});

Cypress.Commands.add("playerXIsWinn", () => {
    const squareId = '[data-testid="square"]';

    cy.get(squareId).eq(0).click();
    cy.get(squareId).eq(1).click();
    cy.get(squareId).eq(3).click();
    cy.get(squareId).eq(4).click();
    cy.get(squareId).eq(5).click();
    cy.get(squareId).eq(7).click();

    cy.get('[data-testid="status"]')
        .contains('Winner: X')
});
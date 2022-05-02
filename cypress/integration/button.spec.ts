/// <reference types="cypress" />
describe('Button', () => {
    it('Should disappear when clicked', () => {
        cy.visit('/')

        cy.get("[data-cy=button]")
            .should('be.visible')
            .click()

        cy.get('[data-cy=button]').should('not.exist')
    })
})
/// <reference types="cypress" />

describe('Task 4',() => {
it('TC1', () => {
    cy.visit("/");
    cy.get("#search").type("shirt{enter}");
    cy.get(".products li").first().click();
    cy.wait(1000);
    cy.get("[option-label='M']").click();
    cy.get(".swatch-attribute-options .color").last().click();
    cy.get("#qty").clear().type(3);
    cy.get("#product-addtocart-button").click();
})
});
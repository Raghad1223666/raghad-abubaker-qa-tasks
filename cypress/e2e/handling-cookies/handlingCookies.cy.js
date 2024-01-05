/// <reference types="cypress" />

describe("Handling Cookies", () => {
  it("Check that we have cookies", () => {
    cy.visit("https://www.amazon.de/");
    cy.getCookies().should("not.be.empty");
  });

  it("Check cookies amount", () => {
    cy.visit("https://www.amazon.de/");
    cy.getCookies().should("have.length", 7);
  });

  it("Check cookie value", () => {
    cy.visit("https://www.amazon.de/");
      cy.getCookie("session-id").should("exist").and("have.property", "domain", ".amazon.de");
  });

  it("Check that cookies are cleared successfully", () => {
    cy.visit("https://www.amazon.de/");
    cy.getCookies().should("not.be.empty");
    cy.clearCookies();
    cy.getCookies().should("be.empty");
  });
});

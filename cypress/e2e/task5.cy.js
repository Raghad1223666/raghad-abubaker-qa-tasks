/// <reference types="cypress" />

describe("Check create an account page", () => {
  it("Verify that all fields/buttons in creating an account page are visible", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").should("be.visible");
    cy.get("#lastname").should("be.visible");
    cy.get("#email_address").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password-confirmation").should("be.visible");
    cy.get(".submit").should("be.visible");
  });

  //Happy scenario
  it("verify from create account - Happy scenario", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type("Jermainqqqpde");
    cy.get("#lastname").type("Johnsontrrrrr");
    cy.get("#email_address").type("lusep8dskjjmnd@mailinator.com");
    cy.get("#password").type("raghad9797#@");
    cy.get("#password-confirmation").type("raghad9797#@");
    cy.get(".submit").click();
    cy.wait(2000);
    cy.get(".messages [data-bind]").last().should("have.text","Thank you for registering with Main Website Store.");
  });

  //Bad scenario
  it("verify from create account with an already existing account - Bad scenario", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type("Jermaine");
    cy.get("#lastname").type("Johnson");
    cy.get("#email_address").type("lusep@mailinator.com");
    cy.get("#password").type("raghad9797#@");
    cy.get("#password-confirmation").type("raghad9797#@");
    cy.get(".submit").click();
    cy.wait(2000);
    cy.get(".messages [data-bind]").last().should("contain","There is already an account with this email address. If you are sure that it is your email address, ");
  });
});

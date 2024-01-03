import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

Given("The user navigate to create account page", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
});

When("Fill {string} field", (fieldName) => {
  switch (fieldName) {
    case "firstName":
      cy.get("#firstname").clear().type(firstName);
      break;
    case "lastName":
      cy.get("#lastname").clear().type(lastName);
      break;
    case "email":
      cy.get("#email_address").clear().type(email);
      break;
    case "password":
      cy.get("#password").clear().type(password);
      break;
    case "confirmPassword":
      cy.get("#password-confirmation").clear().type(password);
      break;
  }
});

When("Click on the Create an Account button", () => {
  cy.contains("span", "Create an Account").click();
});

Then(
  "The user account created successfully and the success alert message is shown {string}",
  (successMessage) => {
    cy.get("[role=alert]").should("contain", successMessage);
  }
);

Then("The user redirected to My account page successfully", () => {
  cy.url().should(
    "eql",
    "https://magento.softwaretestingboard.com/customer/account/"
  );
  cy.get(".page-title").should("contain", "My Account");
});

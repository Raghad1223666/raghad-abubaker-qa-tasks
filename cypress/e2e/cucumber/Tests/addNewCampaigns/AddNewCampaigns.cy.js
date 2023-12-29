import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The admin visit website", () => {
  cy.visit("https://admin-demo.nopcommerce.com/login");
});

When("The admin fill email field", () => {
  cy.get("#Email").clear().type("admin@yourstore.com");
});

When("The admin fill password field", () => {
  cy.get("#Password").clear().type("admin");
});

When("The admin click on the Login button", () => {
  cy.get("[type='submit']").click();
});

When("The admin open promotions collapse item", () => {
  cy.get(".nav-pills > li:eq(4)").click();
});

When("The admin click on campaigns item", () => {
  cy.get("#nopSideBarPusher").click();
  cy.get(".nav-pills > li:eq(4)").click();
  cy.contains("p", "Campaigns").click();
});

When("The admin click on Add new button", () => {
  cy.contains("Add new").click();
});

When("The admin fill Name field", () => {
  cy.get("#Name").type("Ashton Roth");
});

When("The admin fill Subject field", () => {
  cy.get("#Subject").type("Dolor et sint id eu");
});

When("The admin fill Body field", () => {
  cy.get("#Body").type("Cupidatat assumenda");
});

When("The admin fill Planned date of sending field", () => {});

When("The admin select Limited to store from dropdown", () => {
  cy.get("#StoreId").select(0);
});

When("The admin select Limited to customer role from dropdown", () => {
  cy.get("#CustomerRoleId").select(1);
});

When("The admin click on the Save button", () => {
  cy.get("[name=save]").click();
});

Then(
  "The campaigns added successfully and success alert message is shown: {string}",
  (successMessage) => {
    cy.get(".alert.alert-success").should("contain", successMessage);
  }
);

Then("The campaigns should be visible in the result table", () => {
    cy.get("table tbody tr").should("contain", "Ashton Roth");
  });
  

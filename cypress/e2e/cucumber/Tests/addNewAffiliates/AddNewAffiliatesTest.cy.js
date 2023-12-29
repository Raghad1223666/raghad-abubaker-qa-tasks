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

When("The admin click on Affiliates item", () => {
  cy.get("#nopSideBarPusher").click();
  cy.get(".nav-pills > li:eq(4)").click();
  cy.contains("p", "Affiliates").click();
});

When("The admin click on Add new button", () => {
  cy.contains("Add new").click();
});

When("The admin check the Active checkbox", () => {
  cy.get("#Active").check();
});

When("The admin fill First Name field", () => {
  cy.get("#Address_FirstName").type("Radi");
});

When("The admin fill Last Name field", () => {
  cy.get("#Address_LastName").type("dioo");
});

When("The admin fill Email field", () => {
  cy.get("#Address_Email").type("nybadyjil@mailinator.com");
});

When("The admin fill Company field", () => {
  cy.get("#Address_Company").type("Ramos Hendrix Co");
});

When("The admin select Country from dropdown", () => {
  cy.get("#Address_CountryId").select(1);
});

When("The admin select State / province from dropdown", () => {
  cy.get("#Address_StateProvinceId").select(0);
});

When("The admin fill County / region field", () => {
  cy.get("#Address_County").type("Odio nulla voluptate");
});

When("The admin fill City field", () => {
  cy.get("#Address_City").type("Numquam enim totam e");
});

When("The admin fill Address 1 field", () => {
  cy.get("#Address_Address1").type("75 Old Street");
});

When("The admin fill Address 2 field", () => {
  cy.get("#Address_Address2").type("Quia eu consequatur ");
});

When("The admin fill Zip / postal code field", () => {
  cy.get("#Address_ZipPostalCode").type("81285");
});

When("The admin fill Phone number field", () => {
  cy.get("#Address_PhoneNumber").type("+1 (692) 593-1883");
});

When("The admin fill Fax number field", () => {
  cy.get("#Address_FaxNumber").type("+1 (238) 667-2728");
});

When("The admin fill Admin comment field", () => {
  cy.get("#AdminComment").type("Adipisci iure proide");
});

When("The admin fill Friendly URL name field", () => {
  cy.get("#FriendlyUrlName").type("Brooke Pearson");
});

When("The admin click on the Save button", () => {
  cy.get("[name=save]").click();
});

Then(
  "The affiliates added successfully and success alert message is shown: {string}",
  (successMessage) => {
    cy.get(".alert.alert-success").should("contain", successMessage);
  }
);

When("The admin reload the page", () => {
  cy.reload();
});

When("The admin search about the added affiliates", () => {
  cy.get("#SearchFirstName").type("Radi");
  cy.get("#SearchLastName").type("dioo");
  cy.get("#search-affiliates").click();
});

Then("The affiliates should be visible in the result table", () => {
  cy.get("table tbody tr").should("contain", "Radi").and("contain", "dioo");
});

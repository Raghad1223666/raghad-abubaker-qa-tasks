import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The admin visit website", () => {
  cy.visit("https://admin-demo.nopcommerce.com/login");
});

When("The admin login to website", () => {
  cy.loginToNopcommerce("admin@yourstore.com", "admin");
});

When("The admin open promotions collapse item", () => {
  cy.get(".nav-pills > li:eq(4)").click();
});

When("The admin click on Discounts item", () => {
  cy.get("#nopSideBarPusher").click();
  cy.get(".nav-pills > li:eq(4)").click();
  cy.contains("p", "Discounts").click();
});

When("The admin click on Add new button", () => {
  cy.contains("Add new").click();
});

When("The admin check Active checkbox", () => {
  cy.get("#IsActive").check();
});

When("The admin fill Discount Name field", () => {
  cy.get("#Name").type("Raghad discount");
});

When("The admin select Discount type", () => {
  cy.get("#DiscountTypeId").select(2);
});

When("The admin check Apply to subcategories", () => {
  cy.get("#AppliedToSubCategories").check();
});

When("The admin check Use percentage checkbox", () => {
  cy.get("#UsePercentage").check();
});

When("The admin fill Discount percentage field", () => {
  cy.wait(1000);
  cy.get("#pnlDiscountAmount  input:nth-child(1)").type("4", { force: true });
});

When("The admin check Requires coupon code checkbox", () => {
  cy.get("#RequiresCouponCode").check();
});

When("The admin fill Coupon code field", () => {
  cy.get("#CouponCode").type("e3566");
});

When("The admin fill Maximum discounted quantity field", () => {
  cy.get("#pnlMaximumDiscountedQuantity input:nth-child(1)").type("2");
});

When("The admin click on the save button", () => {
  cy.get("[name='save']").click();
});

Then(
  "The discount added successfully and success alert message is shown: {string}",
  (successMessage) => {
    cy.get(".alert.alert-success").should("contain", successMessage);
  }
);

When("The admin reload the page", () => {
  cy.reload();
});

When("The admin search about discount name", () => {
  cy.get("#SearchDiscountName").type("Raghad discount");
  cy.get("#search-discounts").click();
});

Then("The discount name should be visible in the result table", () => {
  cy.get("#discounts-grid tbody tr").should("contain", "Raghad discount");
});

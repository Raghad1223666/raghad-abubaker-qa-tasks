/// <reference types="cypress" />
describe("Task6", () => {
  before(() => {
    cy.visit("https://admin-demo.nopcommerce.com/");
    cy.login();
    cy.wait(1500);
    cy.get("#nopSideBarPusher").click();
    cy.get(".nav-sidebar > li:nth-child(2) > a").click();
    cy.contains("Products").click();

    //Add products
    for (let i = 0; i < 2; i++) {
      cy.contains("Add new").click();
      cy.get("#Name")
        .clear()
        .type(`Raghad Product ${i + 1}`);
      cy.get("[name=save]").click();
      cy.wait(500);
    }
  });

  it("Verify that the user can search about products and delete all selected products", () => {
    //Search
    cy.get("#SearchProductName").type("Raghad Product");
    cy.get("#search-products").click();
    cy.wait(1000);

    // Delete
    cy.get("th > .mastercheckbox").check();
    cy.get("#delete-selected").click();
    cy.wait(500);
    cy.get("#delete-selected-action-confirmation-submit-button").click();
    cy.wait(1000);

    //Reload page
    cy.reload();

    //Re-Search to make sure the products deleted successfully.
    cy.get("#SearchProductName").clear().type("Raghad Product");
    cy.get("#search-products").click();
    cy.get("td.dataTables_empty").should(
      "contain",
      "No data available in table"
    );
  });
});

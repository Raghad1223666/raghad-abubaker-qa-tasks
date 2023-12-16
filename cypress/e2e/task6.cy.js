/// <reference types="cypress" />
describe("Task6", () => {
  beforeEach(() => {
    cy.visit("https://admin-demo.nopcommerce.com/");
    cy.login();
    cy.wait(1500);
  });

  it("Verify that the user can search about products and delete all selected products", () => {
    let product1 = "Raghad Product 1";
    let product2 = "Raghad Product 2";
    cy.get("#nopSideBarPusher").click();
    cy.get(".nav-sidebar > li:nth-child(2) > a").click();
    cy.contains("Products").click();

    //Add products
    cy.addProduct(product1);
    cy.addProduct(product2);

    //Search
    cy.get("#SearchProductName").type("Raghad Product");
    cy.get("#search-products").click();
    cy.get("#products-grid tbody tr").should("contain", product1);
    cy.get("#products-grid tbody tr").should("contain", product2);
    cy.wait(1000);

    // Delete
    cy.get("th > .mastercheckbox").check();
    cy.get("#delete-selected").click();
    cy.wait(500);
    cy.get("#delete-selected-action-confirmation-submit-button").click();
    cy.wait(1000);

    //Re-Search to make sure the products deleted successfully.
    cy.get("#SearchProductName").clear().type("Raghad Product");
    cy.get("#search-products").click();
    cy.get("td.dataTables_empty").should("contain", "No data available in table");
    cy.get("#products-grid tbody tr").should("not.contain", product1);
    cy.get("#products-grid tbody tr").should("not.contain", product2);
  });
});

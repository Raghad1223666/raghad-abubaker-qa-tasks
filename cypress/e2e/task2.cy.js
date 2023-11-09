/// <reference types="cypress" />

it("task2", () => {
  //********** Home page **************
  cy.visit("/");
  //Product - select by class, element and :first-child
  cy.get("ol li.product-item:first-child ").click();

  //********** Product details page **************
  //Size - select by class and :first-child
  cy.get(".swatch-attribute-options .swatch-option.text:first-child").click();
  //Color - select by class and :nth-child
  cy.get(".swatch-attribute-options .swatch-option.color:nth-child(2)").click();
  //Qty - select by attribute and element
  cy.get("input[name=qty]").clear().type("4");
  //Add to Cart Button - select by id
  cy.get("#product-addtocart-button").click();
  //Shopping cart anchor - select by class and element
  cy.get(".message-success a").click();

  //********** Shopping Cart page **************
  cy.wait(1000);
  //Proceed to Checkout Button - select by class, element and :first-child
  cy.get("ul.checkout li:first-child .action.primary.checkout").click();

  //********** Shipping Form **************
  cy.wait(6000);
  //Email - select by id
  cy.get("#customer-email-fieldset #customer-email");
  //First name - select by attribute
  cy.get("[name=firstname]");
  //Last name - select by attribute
  cy.get("[name=lastname]");
  //Company - select by attribute
  cy.get("[name=company]");
  //Street 0 - select by attribute
  cy.get("[name='street[0]']");
  //Street 1 - select by attribute
  cy.get("[name='street[1]']");
  //Street 2 - select by attribute
  cy.get("[name='street[2]']");
  //City - select by attribute
  cy.get("[name=city]");
  //Region - select by attribute and element
  cy.get("select[name=region_id]");
  //Postcode - select by attribute
  cy.get("[name=postcode]");
  //Country - select by attribute and element
  cy.get("select[name=country_id]");
  //Telephone - select by attribute
  cy.get("[name=telephone]");
  //Shipping Methods first radio- select by attribute and class
  cy.get(".radio[value=tablerate_bestway]");
  //Shipping Methods second radio - select by attribute and class
  cy.get(".radio[value=flatrate_flatrate]");
  //Next button - select by attribute and element
  cy.get("button[data-role=opc-continue]");
});

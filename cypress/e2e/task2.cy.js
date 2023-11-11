/// <reference types="cypress" />

it("task2", () => {
  //********** Home page **************
  cy.visit("/");
  //Product - select by class, element and :first-child
  cy.get("ol li.product-item:first-child").click();

  //********** Product details page **************
  //Size - select by class and :first-child
  cy.get(".swatch-attribute-options .text:first-child").click();
  //Color - select by class and :nth-child
  cy.get(".swatch-attribute-options .color:nth-child(2)").click();
  //Qty - select by attribute and element
  cy.get("input[name=qty]").clear().type("4");
  //Add to Cart Button - select by id
  cy.get("#product-addtocart-button").click();
  //Shopping cart anchor - select by class and element
  cy.get(".message-success a").click();

  //********** Shopping Cart page **************
  cy.wait(3000);
  //Proceed to Checkout Button - select by class, element and :first-child
  cy.get("ul li:first-child .checkout").click();

  //********** Shipping Form / Shipping **************
  cy.wait(8000);
  //Email - select by id
  cy.get("#customer-email-fieldset #customer-email").type(
    "jyrofybyc@mailinator.com"
  );
  //First name - select by attribute
  cy.get("[name=firstname]").type("Stephanie");
  //Last name - select by attribute
  cy.get("[name=lastname]").type("Burnett");
  //Company - select by attribute
  cy.get("[name=company]").type("Crawford Webster Traders");
  //Street 0 - select by attribute
  cy.get("[name='street[0]']").type("562 East Oak Avenue");
  //Street 1 - select by attribute
  cy.get("[name='street[1]']").type("Est neque reiciendis");
  //Street 2 - select by attribute
  cy.get("[name='street[2]']").type("Reiciendis necessita");
  //City - select by attribute
  cy.get("[name=city]").type("Ullamco nobis do pro");
  //Region - select by attribute and element
  cy.get("select[name=region_id]");
  //Postcode - select by attribute
  cy.get("[name=postcode]").type("76219");
  //Country - select by attribute and element
  cy.get("select[name=country_id]").select("AF");
  //Telephone - select by attribute
  cy.get("[name=telephone]").type("+1 (254) 906-6714");
  //Shipping Methods first radio- select by attribute and class
  cy.get(".radio[value=tablerate_bestway]");
  //Shipping Methods second radio - select by attribute and class
  cy.get(".radio[value=flatrate_flatrate]").check();
  //Next button - select by attribute and element
  cy.get("button[data-role=opc-continue]").click();

  //********** Shipping Form / Review & Payments **************
  cy.wait(3000);
  //My billing input - select by id
  cy.get("#billing-address-same-as-shipping-checkmo").click();
  //Place Order - select by class
  cy.get(".action.checkout").click();
});

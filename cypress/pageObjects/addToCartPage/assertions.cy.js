class addToCartPageAssertions {

  checkCounterIsVisible() {
    cy.get(".counter-number").should("be.visible");
    return this;
  }

}
export default addToCartPageAssertions;

class addToCartPageActions {
    
  searchAboutProduct(productName) {
    cy.get("#search").type(productName);
    return this;
  }

  chooseProductFromList() {
    cy.get(".product-items li").first().click();
    return this;
  }

  chooseSizeForProduct(size) {
    cy.get(".swatch-attribute.size").contains(size).click();
    return this;
  }

  chooseColorForProduct(colorIndex) {
    cy.get(".swatch-attribute.color")
      .find(".swatch-option")
      .eq(colorIndex)
      .click();
    return this;
  }

  clickOnTheAddToCartButton() {
    cy.get("#product-addtocart-button").click();
    return this;
  }
}

export default addToCartPageActions;

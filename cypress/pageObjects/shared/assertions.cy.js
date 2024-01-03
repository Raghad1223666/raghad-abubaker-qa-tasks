class sharedAssertions {
  checkUrlEqualValue(url) {
    cy.url().should("eq", url);
    return this;
  }

  checkPageTitleContainValue(value) {
    cy.get(".page-title").should("contain", value);
    return this;
  }

  checkAlertMessageContainValue(message) {
    cy.get("[role=alert]").should("contain", message);
    return this;
  }
}

export default sharedAssertions;

class sharedActions {
    
  openMagentoWebsite(pagePath) {
    if (pagePath) {
      cy.visit(`https://magento.softwaretestingboard.com/${pagePath}`);
    } else {
      cy.visit("https://magento.softwaretestingboard.com");
    }
    return this;
  }

  waitSeconds(seconds) {
    cy.wait(seconds);
    return this;
  }
}

export default sharedActions;

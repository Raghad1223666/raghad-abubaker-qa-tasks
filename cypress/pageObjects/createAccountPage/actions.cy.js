class createAccountPageActions {
    
  typeInFirstNameField(firstName) {
    cy.get("#firstname").clear().type(firstName);
    return this;
  }

  typeInLastNameField(lastName) {
    cy.get("#lastname").clear().type(lastName);
    return this;
  }

  typeInEmailField(email) {
    cy.get("#email_address").clear().type(email);
    return this;
  }

  typeInPasswordField(password) {
    cy.get("#password").clear().type(password);
    return this;
  }

  typeInConfirmPasswordField(confirmPassword) {
    cy.get("#password-confirmation").clear().type(confirmPassword);
    return this;
  }

  clickOnCreateAccountButton() {
    cy.get(".submit.primary").click();
  }
}

export default createAccountPageActions;

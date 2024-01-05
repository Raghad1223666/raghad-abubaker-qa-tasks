/// <reference types="cypress" />

describe("General practices", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.de/");
    //Aliases
    cy.url().as("url");
  });

  // ****** Title function ***********
  it("title function", () => {
    cy.title().should(
      "eq",
      "Amazon.de: Günstige Preise für Elektronik & Foto, Filme, Musik, Bücher, Games, Spielzeug & mehr"
    );
  });

  // ****** viewport function ***********
  it("viewport function", () => {
    cy.viewport("iphone-8");
  });

  // ****** go function ***********
  it("go function", () => {
    cy.go("back");
    cy.go("forward");
  });

  // ****** Cookies ***********
  it("Cookies", () => {
    cy.getCookies();
    cy.getCookie("ubid-acbde");
    cy.setCookie("myName", "Raghad");
    cy.getCookies();
    cy.getCookie("myName");
    cy.clearAllCookies();
    cy.getCookies();
  });

  // ****** Queries in visit function ***********
  //   it("visit with queries", () => {
  //   cy.visit("baseUrl", {qs: {q: "cypress"}})
  //   });

  // ****** Aliases ***********
  //*** We can't use variables in Cypress instead we can use Aliases ***/
  it("Aliases - 1", () => {
    // I can use url alias from any test case
    cy.get("@url").should("eq", "https://www.amazon.de/");
  });

  it("Aliases - 2", () => {
    // I can use url alias from any test case
    cy.get("@url").should("eql", "https://www.amazon.de/");
  });
 
});

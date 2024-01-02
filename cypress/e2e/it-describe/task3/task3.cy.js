/// <reference types="cypress" />

describe("TS_1: Check Sign in functionality", () => {
  it("TC_1: Verify Sign in with valid email and password", () => {
    cy.visit("https://demo.productionready.io/#/login");
    //Sign in text - Select by text and (element with class)
    cy.contains("h1.ng-binding", "Sign in");
    //Need an account? text - Select by text
    cy.contains("Need an account?");
    //Email input - Select by attribute
    cy.get("[type=email]").type("raghadabubaker12345@gmail.com");
    //Password input - Select by attribute
    cy.get("[type=password]").type("123");
    //Sign in button - Select by element
    cy.get("button").click();
  });
});

describe("TS_2: Check Home page", () => {
  it("TC_1: Home page", () => {
    cy.visit("https://demo.productionready.io/#/");
    // conduit brand - Select by class
    cy.get(".navbar-brand");

    // Home nav item - Select by text and element
    cy.contains("a", "Home");
    // or
    // Home nav item - Select by chain of element, first(position), find, class
    cy.get("ul").first().find(".nav-item").first().find(".nav-link.active");

    // Sign up nav item - Select by text and element
    cy.contains("a", "Sign up");
    // or
    // Sign up nav item - Select by chain of element, class, find and eq(position)
    cy.get("ul").first().find(".nav-item").eq(2).find("a");

    // conduit header - Select by element and class
    cy.get("h1.logo-font");
    // A place ... subtitle - Select by text
    cy.contains("A place to share your knowledge.");
    // Global Feed Tab - Select by text
    cy.contains("Global Feed");
    // Favorite button - Select by element and first(position)
    cy.get("favorite-btn").first();
    // Read more label - Select by text, element and first(position)
    cy.contains("span", "Read more...").first();
    // Popular Tags - Select by text, class and element
    cy.contains(".sidebar p", "Popular Tags");

    // codebaseShow tag - Select by text
    cy.contains("codebaseShow");
    //or
    // codebaseShow tag - Select by attribute and filter
    cy.get('[ng-bind="tagName"]').filter(":contains(codebaseShow)");

    // deserunt tag - Select by text and class
    cy.contains(".tag-default.tag-pill", "deserunt");
  });
});

describe("TS_3: Check Details page", () => {
  it("TC_1: Details page", () => {
    cy.visit(
      "https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863"
    );
    // Page Header - Select by element and class
    cy.get("h1.ng-binding");
    // Author's Image - Select by class and element
    cy.get(".banner a img");
    // Author's name - Select by class
    cy.get(".banner .author");
    // Date - Select by class
    cy.get(".banner .date");
    // Follow button - Select by text, class and element
    cy.contains(".banner button", "Follow Anah Benešová");
    // Favorite button - Select by text, class and element
    cy.contains(".banner button", "Favorite Article");
    // Details paragraph - Select by class and element
    cy.get(".ng-binding p");
    // rerum tag - Select by text
    cy.contains("rerum");
    // quae tag - Select by text
    cy.contains("quae");
  });
});

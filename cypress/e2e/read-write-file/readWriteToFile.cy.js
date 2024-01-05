/// <reference types="cypress" />

describe("Read / Write File", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.de/");
  });

  // ****** Write File ***********
  it("Write File", () => {
    cy.writeFile("cypress/fixtures/file.json", { name: "Raghad", age: 25 });
  });

  // Doesn't log in the runner
  it("Fixture", () => {
    // fixture does Not take full path
    cy.fixture("file.json").then((data) => {
      expect(data.name).to.be.eq("Raghad");
      expect(data.age).to.be.eq(25);
    });
  });

  // ****** Read file ***********
  // Log in the runner
  it("Read file", () => {
    //readFile take full path
    cy.readFile("cypress/fixtures/file.json").then((data) => {
      expect(data.name).to.be.eq("Raghad");
      expect(data.age).to.be.eq(25);
    });
  });
});

/// <reference types="cypress" />

describe("Api-Testing", () => {
  it.only("Simple Request", () => {
    cy.request("GET", "https://www.bstackdemo.com/").then((response) => {
      cy.log(response)
      expect(response.status).to.be.eq(200);
      expect(response.duration).to.be.lessThan(3000);
    });
  });

  it("GET Request", () => {
    cy.request({
      url: "https://reqres.in/api/users",
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.statusText).to.be.equal("OK");
    });
  });

  it.only("POST Request", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: { name: "Raghad Abu Baker", job: "Software Engineer" },
    }).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.statusText).to.be.equal("Created");
      expect(response.body.name).to.be.equal("Raghad Abu Baker");
      expect(response.duration).to.be.lessThan(3000);
    });
  });

  it("PUT Request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: { first_name: "Rayan", last_name: "Abu Baker" },
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.statusText).to.be.equal("OK");
      expect(response.body.first_name).to.be.equal("Rayan");
      expect(response.body.last_name).to.be.equal("Abu Baker");
    });
  });

  it("PATCH Request", () => {
    cy.request({
      method: "PATCH",
      url: "https://reqres.in/api/users/1",
      body: { first_name: "Rayan", last_name: "Abu Baker" },
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.statusText).to.be.equal("OK");
      expect(response.body.first_name).to.be.equal("Rayan");
      expect(response.body.last_name).to.be.equal("Abu Baker");
    });
  });

  it("DELETE Request", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/1",
    }).then((response) => {
      expect(response.status).to.be.eq(204);  
      expect(response.statusText).to.be.equal("No Content")
    });
  });

  it('GET Request - with query', () => {
    cy.request({method: 'GET', url: 'http://api.weatherstack.com/current', qs: {
    access_key: Cypress.env('access_key'),
    query: "Palestine"
    }}).then((response) =>{
    expect(response.status).to.eq(200);
    expect(response.statusText).to.be.equal("OK");
    })
    })
});

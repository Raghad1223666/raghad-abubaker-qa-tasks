import {Given ,Then , When} from 'cypress-cucumber-preprocessor/steps';

Given("The admin visit website",() =>{
    cy.visit("https://admin-demo.nopcommerce.com/login");
})

When("The admin fill email field", ()=>{
    cy.get("#Email").clear().type("admin@yourstore.com");
})


When("The admin fill password field", ()=>{
    cy.get("#Password").clear().type("admin");
})

When("The admin click on the Login button", ()=>{
    cy.get("[type='submit']").click();
})

When("The admin open promotions collapse item", ()=>{
    cy.get(".nav-pills > li:eq(4)").click();
})

When("The admin click on Discounts item", ()=>{
    cy.get("#nopSideBarPusher").click();
        cy.get(".nav-pills > li:eq(4)").click();
    cy.contains("p", "Discounts").click();
})

When("The admin click on Add new button", ()=>{
    cy.contains("Add new").click();
})

When("The admin check the Is active checkbox", ()=>{
    cy.get("#IsActive").check();
    
})

When("The admin fill Name field", ()=>{
    cy.get("#Name").type("Halee Fletcher");
    
})

When("The admin select Discount type", ()=>{
    cy.get("#DiscountTypeId").select(2);
})

When("The admin check Apply to subcategories", ()=>{
    cy.get("#AppliedToSubCategories").check();
})

When("The admin check Use percentage checkbox", ()=>{
    cy.get("#UsePercentage").check();
})

When("The admin fill Discount amount field", ()=>{
    cy.get("#pnlDiscountAmount  input:nth-child(1)").type("4",{force:true});
})

When("The admin check Requires coupon code checkbox", ()=>{
    cy.get("#RequiresCouponCode").check();
})

When("The admin fill Coupon code field", ()=>{
    cy.get("#CouponCode").type("e3566");
})

When("The admin fill Maximum discounted quantity field", ()=>{
    cy.get("#pnlMaximumDiscountedQuantity input:nth-child(1)").type("2");
})

When("The admin click on the save button", ()=>{
    cy.get("[name='save']").click();
})

Then("The discount added successfully and success alert message is shown: {string}", (successMessage)=>{
    cy.get(".alert.alert-success").should("contain", successMessage);
})


When("The admin reload the page", ()=>{
    cy.reload();
})

When("The admin search about discount name", ()=>{
    cy.get("#SearchDiscountName").type("Halee Fletcher");
})

Then("The discount name should be visible in the result table", ()=>{
    cy.get("#discounts-grid tbody tr").should("contain", "Halee Fletcher");
})


import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import createAccountPageActions from "../../../../../pageObjects/createAccountPage/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";

const firstName="Razan";
const lastName="user";
const email = "razanUsser"+Math.floor(Math.random()*100)+"@gmail.com"; 
const password = "test@123%6";
const confirmPassword = "test@123%6";

const sharedAction = new sharedActions();
const createAccountActions = new createAccountPageActions();
const sharedAssertion = new sharedAssertions();

Given("The user navigated to create account page",()=>{
    sharedAction.openMagentoWebsite("customer/account/create/");
});

When("Type {string} in the field",(fieldName)=>{
    switch(fieldName){
        case "firstName":
            createAccountActions.typeInFirstNameField(firstName);
            break;
        case "lastName":
            createAccountActions.typeInLastNameField(lastName);
            break; 
        case "email":
            createAccountActions.typeInEmailField(email);
            break;
        case "password":
            createAccountActions.typeInPasswordField(password);;
            break; 
        case "confirmPassword":
            createAccountActions.typeInConfirmPasswordField(confirmPassword);
            break;     
        }
})

When("Clicks on Create an account button",()=>{
    createAccountActions.clickOnCreateAccountButton();
});

Then("The Account should be created successfully",()=>{
    sharedAssertion.checkUrlEqualValue("https://magento.softwaretestingboard.com/customer/account/");
    sharedAssertion.checkPageTitleContainValue("My Account")
});

Then("{string} message will be shown",(msg)=>{
    sharedAssertion.checkAlertMessageContainValue(msg);
});

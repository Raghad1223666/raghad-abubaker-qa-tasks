import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import addToCartPageActions from "../../../../../pageObjects/addToCartPage/actions.cy";
import addToCartPageAssertions from "../../../../../pageObjects/addToCartPage/assertions.cy";

const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();
const addToCartActions = new addToCartPageActions();
const addToCartAssertions = new addToCartPageAssertions();

Given("The user navigated to magento website", () => {
  sharedAction.openMagentoWebsite();
});

Given("The user search for shirt product", () => {
  addToCartActions.searchAboutProduct("shirt {enter}");
});

When("The user choose the product X", () => {
  addToCartActions.chooseProductFromList();
});

When(
  "The user choose the size {string} and color {string} for product X",
  (size, colorIndex) => {
    sharedAction.waitSeconds(4000);
    addToCartActions
      .chooseSizeForProduct(size)
      .chooseColorForProduct(colorIndex);
  }
);

When("The user click on Add to cart button", () => {
  addToCartActions.clickOnTheAddToCartButton();
});

Then(
  "The product should be added to the cart successfully with {string}",
  (message) => {
    sharedAction.waitSeconds(6000);
    sharedAssertion.checkAlertMessageContainValue(message);
  }
);

Then("The counter of the cart should be visible", () => {
  addToCartAssertions.checkCounterIsVisible();
});

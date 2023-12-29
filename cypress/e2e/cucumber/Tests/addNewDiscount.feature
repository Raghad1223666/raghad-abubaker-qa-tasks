Feature: Add new discount functionality

    The admin should be able to add new discount

    Background: The admin should login
        Given The admin visit website
        When The admin fill email field
        And The admin fill password field
        And The admin click on the Login button

    Scenario: Verify that the admin can add new discount successfully
        When The admin open promotions collapse item
        And The admin click on Discounts item
        And The admin click on Add new button
        And The admin check Active checkbox
        And The admin fill Name field
        And The admin select Discount type
        And The admin check Apply to subcategories
        And The admin check Use percentage checkbox
        And The admin fill Discount amount field
        And The admin check Requires coupon code checkbox
        And The admin fill Coupon code field
        And The admin fill Maximum discounted quantity field
        And The admin click on the save button
        Then The discount added successfully and success alert message is shown: "The new discount has been added successfully."
        When The admin reload the page
        And The admin search about discount name
        Then The discount name should be visible in the result table




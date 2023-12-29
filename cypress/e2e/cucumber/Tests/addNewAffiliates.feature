Feature: Add new affiliates functionality

    The admin should be able to add new affiliates

    Background: The admin should login
        Given The admin visit website
        When The admin fill email field
        And The admin fill password field
        And The admin click on the Login button

    Scenario: Verify that the user can add new affiliates successfully
        When The admin open promotions collapse item
        And The admin click on Affiliates item
        And The admin click on Add new button
        And The admin check the Active checkbox
        And The admin fill First Name field
        And The admin fill Last Name field
        And The admin fill Email field
        And The admin fill Company field
        And The admin select Country from dropdown
        And The admin select State / province from dropdown
        And The admin fill County / region field
        And The admin fill City field
        And The admin fill Address 1 field
        And The admin fill Address 2 field
        And The admin fill Zip / postal code field
        And The admin fill Phone number field
        And The admin fill Fax number field
        And The admin fill Admin comment field
        And The admin fill Friendly URL name field
        And The admin click on the Save button
        Then The affiliates added successfully and success alert message is shown: "The new affiliate has been added successfully."
        When The admin reload the page
        And The admin search about the added affiliates
        Then The affiliates should be visible in the result table



Feature: Add new Campaigns functionality

    The admin should be able to add new Campaigns

    Background: The admin should login
        Given The admin visit website
        When The admin fill email field
        And The admin fill password field
        And The admin click on the Login button

    Scenario: Verify that the admin can add new Campaigns successfully
        When The admin open promotions collapse item
        And The admin click on campaigns item
        And The admin click on Add new button
        And The admin fill Name field
        And The admin fill Subject field
        And The admin fill Body field
        And The admin fill Planned date of sending field
        And The admin select Limited to store from dropdown
        And The admin select Limited to customer role from dropdown
        And The admin click on the Save button
        Then The campaigns added successfully and success alert message is shown: "The new campaign has been added successfully."
        Then The campaigns should be visible in the result table


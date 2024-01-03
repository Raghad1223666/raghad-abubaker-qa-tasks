Feature: Create new customer account functionality

    The user should be able to create new account

    Scenario: Verify that the user can create a new account successfully
        Given The user navigate to create account page
        When Fill "firstName" field
        And Fill "lastName" field
        And Fill "email" field
        And Fill "password" field
        And Fill "confirmPassword" field
        And Click on the Create an Account button
        Then The user account created successfully and the success alert message is shown "Thank you for registering with Main Website Store."
        And The user redirected to My account page successfully


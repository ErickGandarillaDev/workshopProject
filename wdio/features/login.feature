Feature: The Internet Guinea Pig Website


  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username>, <email> and <password>


    Examples:
      | username | password | email     | message                        |
      | u6       | Pass     | e6@e6.com | You logged into a secure area! |
#      | foobar   | barfoo               || Your username is invalid!      |

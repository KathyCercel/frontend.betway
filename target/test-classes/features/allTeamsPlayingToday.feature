@WIP
Feature: Make Records for specific sports :

  Scenario: As a user I want to output all team names with a match today
    Given a BBC  Sport player I navigate to "Football" page
    When i select the "Scores & Fixtures" tab
    Then i am expecting to see if there are any matches today

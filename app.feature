Feature: Fun with flags

  Scenario: Initial loading of flags
    Given I am on the initial fun with flags page
    And I check if title page displayed
    Then check if the expected number of flags is the one initially displayed

  Scenario: Should search for a country by searching in the search bar
    Given I am on the initial fun with flags page
    When I enter "Brazil" in the search bar
    And I see "Brazil" card
    When I can hit click "Brazil" card
    And I see "Brazil (BRA)" card and region "Americas"
    When I click in "back" button for back to home
    Then I navigation to home screen see "Fun whit flags"
    And I check if title page displayed

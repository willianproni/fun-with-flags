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

  Scenario: Should selecting regions by select
    Given I am on the initial fun with flags page
    Then I select "Africa" in the select
    And I see "Algeria" card
    Then I select "America" in the select
    And I see "Anguilla" card
    Then I select "Antarctic" in the select
    And I see "Antarctica" card
    Then I select "Asia" in the select
    And I see "Afghanistan" card
    Then I select "Europe" in the select
    And I see "Åland Islands" card
    Then I select "Oceania" in the select
    And I see "American Samoa" card
    Then I select "All regions" in the select
    Then check if the expected number of flags is the one initially displayed
    And I see "Afghanistan" card

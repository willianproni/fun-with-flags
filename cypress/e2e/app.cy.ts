describe("Fun with flags", () => {
  describe("Should initial loading of flags", () => {
    it("I am on the initial fun with flags page", () => {
      cy.visit("/");
    });

    it("Check if title page displayed", () => {
      cy.contains("h1", "Fun with flags").should("be.visible");
    });

    it("should show correct cards count", () => {
      cy.get("#flags-list > a").should("have.length.greaterThan", 200);
    });
  });

  describe("Should search for a country by search input", () => {
    const country = "Brazil";
    const board = "ARG"

    it("I am on the initial fun with flags page", () => {
      cy.visit("/");
    });

    it(`Then enter ${country} in the search bar`, () => {
      cy.get("#search").type(country);
    });

    it(`Check see ${country} card`, () => {
      cy.contains("h2", "Brazil").should("be.visible");
    });

    it(`Then click on the ${country} card`, () => {
      cy.contains("h2", country).click();
    });

    it(`Then see ${country} details`, () => {
      cy.contains("h2", "Brazil (BRA)").should("be.visible");
      cy.contains("h3", "Americas").should("be.visible");
    });

    it(`Then click in board ${board} button`, () => {
      cy.contains("a", "ARG").click();
    });

    it('Then click in "back" button for back to home', () => {
      cy.contains("a", "Back").click();
    });

    it("Check if title page displayed", () => {
      cy.contains("h1", "Fun with flags").should("be.visible");
    });
  });

  describe("Should selecting regions by select", () => {
    it("I am on the initial fun with flags page", () => {
      cy.visit("/");
    });

    it("Then select 'Africa' in the select", () => {
      cy.get("#selectCountry").select("Africa");
    });

    it('should see "Algeria" card', () => {
      cy.contains("h2", "Algeria").should("be.visible");
    });

    it("Then select 'Americas' in the select", () => {
      cy.get("#selectCountry").select("Americas");
    });

    it('should see "Anguilla" card', () => {
      cy.contains("h2", "Anguilla").should("be.visible");
    });

    it("Then select 'Antarctic' in the select", () => {
      cy.get("#selectCountry").select("Antarctic");
    });

    it('should see "Antarctic" card', () => {
      cy.contains("h2", "Antarctic").should("be.visible");
    });

    it("Then select 'Asia' in the select", () => {
      cy.get("#selectCountry").select("Asia");
    });

    it('should see "Afghanistan" card', () => {
      cy.contains("h2", "Afghanistan").should("be.visible");
    });

    it("Then select 'Europe' in the select", () => {
      cy.get("#selectCountry").select("Europe");
    });

    it('should see "Åland Islands" card', () => {
      cy.contains("h2", "Åland Islands").should("be.visible");
    });

    it("Then select 'Oceania' in the select", () => {
      cy.get("#selectCountry").select("Oceania");
    });

    it('should see "American Samoa" card', () => {
      cy.contains("h2", "American Samoa").should("be.visible");
    });

    it("Then select 'All regions' in the select", () => {
      cy.get("#selectCountry").select("All regions");
    });

    it("should show correct cards count", () => {
      cy.get("#flags-list > a").should("have.length.greaterThan", 200);
    });

    it('should see "Afghanistan" card', () => {
      cy.contains("h2", "Afghanistan").should("be.visible");
    });
  });
});

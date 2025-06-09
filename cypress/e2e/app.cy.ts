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

    it('Then click in "back" button for back to home', () => {
      cy.contains("a", "Back").click();
    });

    it("Check if title page displayed", () => {
      cy.contains("h1", "Fun with flags").should("be.visible");
    });
  });
});

describe("template spec", () => {
  it("Show the results page", () => {
    cy.visit("http://localhost:3000/results");
    cy.get("h1")
      .contains("Good Job")
      .get(".speckle-the-seal")
      .should("be.visible")
      .get(".back-to-home-btn")
      .should("be.visible")
      .get('span.dot')
      .should('exist')
  });
});

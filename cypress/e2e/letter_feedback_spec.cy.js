describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/game");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(1)'
    ).type("h");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(2)'
    ).type("e");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(3)'
    ).type("r");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(4)'
    ).type("l");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(5)'
    ).type("o");
    cy.get(".submit-word-btn").click();
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(2)'
    ).should("have.class", "correct");
    cy.get(
      '[style="display: flex; align-items: center; gap: 1rem;"] > :nth-child(3)'
    ).should("have.class", "incorrect");
  });
});

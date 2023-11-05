describe("template spec", () => {
  const inputs = [
    "hello",
    "goodbye",
    "witch",
    "broom",
    "always",
    "again",
    "duck",
    "pumpkin",
    "green",
    "best",
  ];

  beforeEach(() => {
    inputs.forEach((input) => {
      cy.intercept(
        {
          method: "GET",
          url: `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
        },
        { fixture: input }
      ).as(`apiRequests${input}`);
    });
  });

  it("Show the results page", () => {
    cy.visit("http://localhost:3000/results");
    cy.get("h1")
      .contains("Good Job")
      .get(".speckle-the-seal")
      .should("be.visible")
      .get(".back-to-home-btn")
      .should("be.visible")
      .get("span.dot")
      .should("exist");
  });
});

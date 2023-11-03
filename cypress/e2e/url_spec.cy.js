describe("Test URL changes for the root page, game page, and results page", () => {
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
    // Intercept requests to the specific URL pattern
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

  it("should update the url the reflect the stage of game play the user is currently in", () => {
    cy.visit("http://localhost:3000");
    cy.get(".start-btn")
      .click()
      .wait(2000)
      .url("should.equal", "http://localhost:3000/game");
    cy.get("#0").type("hello").get(".submit-word-btn").click();
    cy.get("#0").type("goodbye").get(".submit-word-btn").click();
    cy.get("#0").type("witch").get(".submit-word-btn").click();
    cy.get("#0").type("broom").get(".submit-word-btn").click();
    cy.get("#0").type("always").get(".submit-word-btn").click();
    cy.get("#0").type("again").get(".submit-word-btn").click();
    cy.get("#0").type("duck").get(".submit-word-btn").click();
    cy.get("#0").type("pumpkin").get(".submit-word-btn").click();
    cy.get("#0").type("green").get(".submit-word-btn").click();
    cy.get("#0")
      .type("best")
      .get(".submit-word-btn")
      .click()
      .wait(2000)
      .url("should.equal", "http://localhost:3000/results");
  });
});

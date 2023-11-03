describe("check that if a 404 error occurs, a useful message is displayed", () => {
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
  it("shows a 404 error and allows a user to return to home.", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".start-btn")
      .click()
      .wait("@apiRequestsbest")
      .url()
      .should("eq", "http://localhost:3000/game");
    cy.visit("http://localhost:3000/nonsense");
    cy.get(".error-message").contains("Something Went Wrong");
    cy.url().should("eq", "http://localhost:3000/nonsense");
    cy.get(".return-home-btn")
      .click()
      .wait("@apiRequestsbest")
      .url()
      .should("eq", "http://localhost:3000/");
    cy.get(".start-btn")
      .click()
      .wait("@apiRequestsbest")
      .url()
      .should("eq", "http://localhost:3000/game");
    cy.visit("http://localhost:3000/game/nonsense");
    cy.get(".error-message").contains("Something Went Wrong");
    cy.url().should("eq", "http://localhost:3000/game/nonsense");
    cy.get(".return-home-btn")
      .click()
      .wait("@apiRequestsbest")
      .url()
      .should("eq", "http://localhost:3000/");
  });
});

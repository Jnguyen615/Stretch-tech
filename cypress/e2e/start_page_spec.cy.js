describe("Get words", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
      {
        statusCode: 200,
        fixture: "hello",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/goodbye",
      {
        statusCode: 200,
        fixture: "goodbye",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/witch",
      {
        statusCode: 200,
        fixture: "witch",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/broom",
      {
        statusCode: 200,
        fixture: "broom",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/always",
      {
        statusCode: 200,
        fixture: "always",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/again",
      {
        statusCode: 200,
        fixture: "again",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/duck",
      {
        statusCode: 200,
        fixture: "duck",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/pumpkin",
      {
        statusCode: 200,
        fixture: "pumpkin",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/green",
      {
        statusCode: 200,
        fixture: "green",
      }
    );
    cy.intercept(
      "GET",
      "https://api.dictionaryapi.dev/api/v2/entries/en/best",
      {
        statusCode: 200,
        fixture: "best",
      }
    );
  });

  it("Show the start page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1")
      .contains("Speckle")
      .get("h2")
      .contains("Spell your way to the end to help Speckle get his snacks!")
      .get(".happy-seal")
      .should("be.visible")
      .get(".start-btn")
      .should("be.visible");
  });
});

describe("Get words - Error Page", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.dictionaryapi.dev/api/v2/entries/en/*",
      },
      { statusCode: 404, body: "Not Found" }
    );
  });

  it("should show the error page", () => {
    it("should show the error page", () => {
      cy.visit("http://localhost:3000/");

      cy.get("h1").contains("Something went wrong");
      cy.get("h1").contains("Speckle").should("not.exist");
    });
  });
});

describe("Test specific URLs with a certain root", () => {
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

  it.skip("should catch URLs with a certain root for multiple inputs", () => {
    cy.visit("http://localhost:3000");

    // After all the requests have been stubbed, you can assert against the responses.
    // Here's an example of how you can do it, assuming you have a fixture for each input.
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("button")
      .click()
      .get("h1")
      .should("contain", "Play Word")
      .get(".boxes-container")
      .find("input")
      .as("child")
      .get("@child")
      .should("have.length", 5)
      .get(".game-page-counter")
      .should("contain", "1 of 10")
      .get("button")
      .should("contain", "submit")
      .get("source")
      .should(
        "have.attr",
        "src",
        "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"
      )
      .get(".seal-movement-container img.seal-body")
      .get(".fish-container")
      .find("img")
      .as("child")
      .get("@child")
      .should("have.length", 10);
  });

  // happy path

  // sad path

  // get to result page
});

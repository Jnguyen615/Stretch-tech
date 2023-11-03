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

  it("Should allow the user to navigate to the first word", () => {
    cy.visit("http://localhost:3000");
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("button")
      .click()
      .get("h1")
      .should("contain", "Listen and Spell")
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
  it("Should move to the next word if correct along with Speckle!", () => {
    cy.visit("http://localhost:3000");
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("button")
      .click()
      .get("input")
      .first()
      .type("h")
      .next("input")
      .type("e")
      .next("input")
      .type("l")
      .next("input")
      .type("l")
      .next("input")
      .type("o")
      .get("button")
      .click()
      .get(".boxes-container")
      .find("input")
      .as("child")
      .get("@child")
      .should("have.length", 7)
      .get("source")
      .should(
        "have.attr",
        "src",
        "https://api.dictionaryapi.dev/media/pronunciations/en/goodbye-us.mp3"
      )
      .get(".seal-body")
      .should("be.visible")
      .should("have.attr", "style")
      .then((style) => {
        const leftValue = parseFloat(style.split(":")[1].trim());
        expect(leftValue).to.equal(9.5);
      });
  });
  // sad path
  it("Should give feedback if the user enters the wrong word", () => {
    cy.visit("http://localhost:3000");
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("button")
      .click()
      .get("input")
      .first()
      .type("h")
      .next("input")
      .type("e")
      .next("input")
      .type("r")
      .next("input")
      .type("r")
      .next("input")
      .type("o")
      .get("button")
      .click()
      .get(".feedback-message")
      .should("contain", "So close! You're 2 letters off!");

    cy.get("input")
      .first()
      .next("input")
      .next("input")
      .clear()
      .type("l")
      .get("button")
      .click()
      .get(".feedback-message")
      .should("contain", "You've got this! You're 1 letter off!");

    cy.get("input")
      .first()
      .next("input")
      .next("input")
      .next("input")
      .clear()
      .type("l")
      .get("button")
      .click()
      .get(".boxes-container")
      .find("input")
      .as("child")
      .get("@child")
      .should("have.length", 7);
  });
  it("Should move all the way to the results page", () => {
    cy.visit("http://localhost:3000");
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("button").click();
    // Array of words to type into input fields
    const wordsToType = [
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
    // Loop through the words and type them into input fields
    wordsToType.forEach((word) => {
      cy.get("input").first().type(word);
      cy.get("button").click();
    });
    cy.url()
      .should("contain", "http://localhost:3000/results")
      .get("h1")
      .should("contain", "Good Job!");
  });
});

describe("500 level error handling", () => {
  const inputs = ["hello"];

  beforeEach(() => {
    inputs.forEach((input) => {
      cy.intercept(
        {
          method: "GET",
          url: `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
        },
        { statusCode: 500 }
      ).as(`apiRequests${input}`);
    });
  });

  it("should display an error message when an error occurs", () => {
    cy.visit("http://localhost:3000");
    inputs.forEach((input) => {
      cy.wait(`@apiRequests${input}`);
    });
    cy.get("h1").should("contain", "Something Went Wrong");
  });
});

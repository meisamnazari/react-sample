describe("App Test", function () {
  it("Visits the react Task website", function () {
    cy.visit("http://localhost:3000/");

    // It first shows a header
    cy.get(".headerContainer");

    // It should shows all the cards at the Home page
    cy.get(".cardContainer").should("have.length", 7);

    // It should shows the cards with tag crime
    cy.get(".headerContainer")
      .find("input")
      .type("Crime")
      .then(() => {
        cy.get(".searchButton")
          .click()
          .then(() => {
            cy.get(".cardContainer").should("have.length", 3);
          });
      });

    // It should shows the cards with tag horror
    cy.get(".headerContainer")
      .find("input")
      .clear()
      .type("Horror")
      .then(() => {
        cy.get(".searchButton")
          .click()
          .then(() => {
            cy.get(".cardContainer").should("have.length", 5);
          });
      });

    // It should shows all cards after clearing searchbar
    cy.get(".headerContainer")
      .find("input")
      .clear()
      .then(() => {
        cy.get(".searchButton")
          .click()
          .then(() => {
            cy.get(".cardContainer").should("have.length", 7);
          });
      });
  });
});

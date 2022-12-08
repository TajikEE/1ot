describe("check home page elements and api calls", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Weather forecast");
  });

  it("checks the weather forecast api call", () => {
    cy.visit("/");
    cy.intercept("GET", "http://localhost:8080/weather-forecast").as(
      "getForecasts"
    );
    cy.wait("@getForecasts");
    cy.get("@getForecasts").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.have.ownProperty("forecasts");
    });
  });

  it("checks that passing isNight prop will change background color", () => {
    cy.visit("/");
    cy.get(".night-card").invoke("attr", "isNight", "true");
    cy.get(".night-card").should(
      "have.css",
      "background-color",
      "rgb(44, 86, 123)"
    );
  });
});

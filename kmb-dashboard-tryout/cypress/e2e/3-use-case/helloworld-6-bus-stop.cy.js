/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:3000/bus_stops/41E81A921D79F375/C3201264CC8E5C5D/6CF34EF02CDBE26B/26305AF62FBEE2BC/1AEB39A1738104D3/7188D2451C5AF461"
    );
  });

  it("load bus stop list", () => {});
});

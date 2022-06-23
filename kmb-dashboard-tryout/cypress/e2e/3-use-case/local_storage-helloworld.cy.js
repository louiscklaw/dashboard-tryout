/// <reference types="cypress" />

context("Local Storage", () => {
  beforeEach(() => {
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem("tour_processed_ls_key")).to.be.null;
    });

    cy.visit("http://localhost:3000");

    cy.get(
      ".MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root",
      { timeout: 10 * 1000 }
    ).should("be.visible");
  });
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it("cy.clearLocalStorage() - clear all data in local storage", () => {
    cy.get(
      '[style="animation: 1.2s ease-in-out 0s infinite normal none running joyride-beacon-outer; background-color: rgba(255, 0, 68, 0.2); border: 2px solid rgb(255, 0, 68); border-radius: 50%; box-sizing: border-box; display: block; height: 100%; left: 0px; opacity: 0.9; position: absolute; top: 0px; transform-origin: center center; width: 100%;"]'
    ).click();

    cy.get(
      '[style="align-items: center; display: flex; justify-content: flex-end; margin-top: 15px;"] > button'
    ).click();

    cy.get('[aria-label="Next"]').click();

    cy.get('[aria-label="Done"]')
      .click()
      .should(() => {
        expect(localStorage.getItem("tour_processed_ls_key")).to.eq("true");
      });
  });
});

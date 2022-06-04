// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navigateToCharacterPage', () => {
  cy.visit('http://localhost:3000');
  cy.request('characters').as('charactersRequest');
  cy.get('@charactersRequest').then((characters) => {
    expect(characters.status).to.eq(200);
    cy.get('[data-test-id="clickCard"]').first().click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('character');
    });
  });
});

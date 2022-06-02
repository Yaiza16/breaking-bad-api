/* eslint-disable */
describe('Breaking Bad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Frontpage can be opened', () => {
    cy.contains('The Breaking Bad API');
  });
  it('Fetches characters items', () => {
    cy.request('characters').as('charactersRequest');
    cy.get('@charactersRequest').then((characters) => {
      expect(characters.status).to.eq(200);
      assert.isArray(characters.body, 'Characters response is an array');
    });
  });
  it('Character card after API request', () => {
    cy.request('characters').as('charactersRequest');
    cy.get('@charactersRequest').then((characters) => {
      expect(characters.status).to.eq(200);
      cy.get('[data-test-id="clickCard"]');
    });
  });
  it('On click card redirects to new route', () => {
    cy.request('characters').as('charactersRequest');
    cy.get('@charactersRequest').then((characters) => {
      expect(characters.status).to.eq(200);
      cy.get('[data-test-id="clickCard"]')
        .click({ multiple: true, force: true })
        .then(() => {
          cy.location().should((loc) => {
            expect(loc.pathname.toString()).to.contain('character');
          });
        });
    });
  });
  it('Change language', () => {
    cy.get('header')
      .contains('EN')
      .click()
      .then(() => {
        cy.contains('Characters');
      });
  });
});

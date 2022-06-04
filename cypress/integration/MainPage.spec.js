describe('Test Language toggle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Fetches characters items', () => {
    cy.request('characters').as('charactersRequest');
    cy.get('@charactersRequest').then((characters) => {
      expect(characters.status).to.eq(200);
      assert.isArray(characters.body, 'Characters response is an array');
    });
  });
  it('Wrong API response redirect to error page', () => {
    cy.intercept('GET', 'characters', { statusCode: 400 }).then(() => {
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain('404');
      });
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
      cy.get('[data-test-id="clickCard"]').click({
        multiple: true,
        force: true,
      });
      cy.location().should((loc) => {
        expect(loc.pathname.toString()).to.contain('character');
      });
    });
  });
  it('On click card error redirects to page 404', () => {});
});

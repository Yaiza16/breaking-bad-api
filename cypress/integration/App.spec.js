/* eslint-disable */
describe('Test Breaking Bad Basic', () => {
  it('Frontpage can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('The Breaking Bad API');
  });
  it('Visit wrong url redirect to error page', () => {
    cy.visit('http://localhost:3000/sgdsgsd');
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('404');
    });
  });
});

describe('Breaking Bad', () => {
  it('Frontpage can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('The Breaking Bad API');
  });
});

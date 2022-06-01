describe('Breaking Bad', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Frontpage can be opened', () => {
    cy.contains('The Breaking Bad API');
  });
});

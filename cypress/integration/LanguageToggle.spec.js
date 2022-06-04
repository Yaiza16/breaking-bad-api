describe('Test Language toggle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Change language', () => {
    cy.get('[aria-label="english-language"]').click();
    cy.contains('Characters');
  });
});

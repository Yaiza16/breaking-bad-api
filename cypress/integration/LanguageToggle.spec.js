describe('Test Language toggle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Change language', () => {
    cy.get('[data-test-id="language-english"]')
      .click()
      .then(() => {
        cy.contains('Characters');
      });
  });
});

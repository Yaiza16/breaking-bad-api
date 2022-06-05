describe('Test Language toggle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('On click flat button change language', () => {
    cy.get('[aria-label="english-language"]').click();
    cy.contains('Characters');
  });
});

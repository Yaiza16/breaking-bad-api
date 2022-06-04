describe('Testing character page', () => {
  beforeEach(() => {
    cy.navigateToCharacterPage();
  });
  it('On click tab change active tab ', () => {
    cy.get('[role="tab"]')
      .eq(1)
      .click()
      .should('have.attr', 'aria-selected', 'true');
  });
});

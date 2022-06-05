describe('Testing character page', () => {
  before(() => {
    cy.navigateToCharacterPage();
  });

  it('On click tab change active tab ', () => {
    cy.get('[role="tab"]')
      .eq(1)
      .click()
      .should('have.attr', 'aria-selected', 'true');
  });
});

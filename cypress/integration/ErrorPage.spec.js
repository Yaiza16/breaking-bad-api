describe('Test Erro page', () => {
  it('Visit wrong url redirect to error page', () => {
    cy.visit('http://localhost:3000/sgdsgsd');
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('404');
    });
  });
});

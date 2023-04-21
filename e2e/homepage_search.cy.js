describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
      cy.visit('https://www.wikipedia.org');
      cy.get("input[type='search']").type('Leo Panthera');
      cy.get("button[type='submit']").click();
      cy.contains('Search results');
      cy.contains('Panthera leo leo');
    });
    it('I can change language', () => {
      cy.visit('https://www.wikipedia.org');
      cy.get('#js-link-box-en').click();
      cy.url().should('include', '/wiki/Main_Page');
      cy.get('#mp-topbanner').contains('Welcome to Wikipedia');
    });
  });
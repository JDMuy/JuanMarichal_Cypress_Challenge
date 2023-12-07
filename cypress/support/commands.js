
Cypress.Commands.add('waitForUrlToInclude', (path, timeout = 10000) => {
    cy.url({ timeout }).should('include', path);
  });
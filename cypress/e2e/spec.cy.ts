it('adds two numbers using a task', () => {
  cy.task('add', { a: 2, b: 3 }).should('equal', 5)
})
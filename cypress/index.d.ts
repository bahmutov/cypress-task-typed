declare namespace Cypress {
  interface Chainable {
    task(
      event: 'add',
      options: { a: number; b: number },
    ): Chainable<number>
  }
}

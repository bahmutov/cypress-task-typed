declare namespace Cypress {
  interface Chainable {
    /**
     * Adds two numbers in Node and yields their sum
     */
    task(
      event: 'add',
      options: { a: number; b: number },
    ): Chainable<number>
  }
}

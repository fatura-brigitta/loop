declare namespace Cypress {
  interface Chainable {
    loginUser(): Chainable<void>
    loginAdmin(): Chainable<void>
    login(): Chainable<void>
  }
}
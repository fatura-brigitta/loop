describe("Login Page", () => {

  beforeEach(() => {
    cy.visit("/login");
  });

  it("should load login page correctly", () => {
    cy.get('[data-cy="login-page"]').should("exist");
    cy.get('[data-cy="login-form"]').should("exist");
  });

  it("should show error when submitting empty form", () => {
    cy.get('[data-cy="login-submit"]').click();

    cy.contains("Kérjük töltse ki az összes mezőt").should("exist");
  });

  it("should validate invalid email format (browser)", () => {
    cy.get('[data-cy="login-email-input"]').type("invalid-email");

    cy.get('[data-cy="login-email-input"]:invalid').should("exist");
  });

  it("should toggle password visibility", () => {
    cy.get('[data-cy="login-password-input"]')
      .type("12345")
      .should("have.attr", "type", "password");

    cy.get('[data-cy="login-password-toggle"]').click();

    cy.get('[data-cy="login-password-input"]')
      .should("have.attr", "type", "text");

    cy.get('[data-cy="login-password-toggle"]').click();

    cy.get('[data-cy="login-password-input"]')
      .should("have.attr", "type", "password");
  });

  it("should show error on invalid credentials", () => {
    cy.intercept("POST", "/api/auth", {
      statusCode: 401,
      body: { message: "Érvénytelen email vagy jelszó" }
    });

    cy.get('[data-cy="login-email-input"]').type("test@email.com");
    cy.get('[data-cy="login-password-input"]').type("wrongpass");

    cy.get('[data-cy="login-submit"]').click();

    cy.contains("Érvénytelen email vagy jelszó").should("exist");
  });

  it("should handle server error", () => {
    cy.intercept("POST", "/api/auth", {
      statusCode: 500,
      body: {}
    });

    cy.get('[data-cy="login-email-input"]').type("test@email.com");
    cy.get('[data-cy="login-password-input"]').type("12345");

    cy.get('[data-cy="login-submit"]').click();

    cy.contains("Érvénytelen email vagy jelszó").should("exist");
  });

  it("should redirect after successful login", () => {
    cy.intercept("POST", "/api/auth", {
      statusCode: 200,
      body: { success: true }
    });

    cy.get('[data-cy="login-email-input"]').type("test@email.com");
    cy.get('[data-cy="login-password-input"]').type("12345");

    cy.get('[data-cy="login-submit"]').click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should redirect to verification page if needed", () => {
    cy.intercept("POST", "/api/auth", {
      statusCode: 401,
      body: {
        needsVerification: true,
        email: "test@email.com"
      }
    });

    cy.get('[data-cy="login-email-input"]').type("test@email.com");
    cy.get('[data-cy="login-password-input"]').type("12345");

    cy.get('[data-cy="login-submit"]').click();

    cy.url().should("include", "/verify-email");
  });

  it("should navigate to register page", () => {
    cy.get('[data-cy="login-register-link"]').click();

    cy.url().should("include", "/register");
  });

  it("should navigate to forgot password page", () => {
    cy.get('[data-cy="login-forgot-password"]').click();

    cy.url().should("include", "/forgot-password");
  });
});
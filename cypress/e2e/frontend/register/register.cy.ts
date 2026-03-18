describe("Register Page", () => {

  beforeEach(() => {
    cy.intercept("GET", "/api/auth", {
      statusCode: 401,
      body: {}
    });

    cy.visit("/register");
  });

  it("should load register page correctly", () => {
    cy.get('[data-cy="register-page"]').should("exist");
    cy.get('[data-cy="register-form"]').should("exist");
  });

  it("should show error when submitting empty form", () => {
    cy.get('[data-cy="register-submit-button"]').click();

    cy.contains("Kérjük töltse ki az összes mezőt!", { timeout: 10000 })
      .should("exist");
  });

  it("should validate invalid email format", () => {
    cy.get('[data-cy="register-email-input"]').type("invalid-email");

    cy.get('[data-cy="register-email-input"]:invalid').should("exist");
  });

  it("should validate short password", () => {
    cy.get('[data-cy="register-name-input"]').type("Test User");
    cy.get('[data-cy="register-email-input"]').type("test@email.com");
    cy.get('[data-cy="register-phone-input"]').type("+36301234567");
    cy.get('[data-cy="register-password-input"]').type("123");

    cy.get('[data-cy="register-submit-button"]').click();

    cy.contains("legalább 5 karakter").should("exist");
  });

  it("should toggle password visibility", () => {
    cy.get('[data-cy="register-password-input"]')
      .type("12345")
      .should("have.attr", "type", "password");

    cy.get('[data-cy="register-password-toggle"]').click();

    cy.get('[data-cy="register-password-input"]')
      .should("have.attr", "type", "text");

    cy.get('[data-cy="register-password-toggle"]').click();

    cy.get('[data-cy="register-password-input"]')
      .should("have.attr", "type", "password");
  });

  it("should allow selecting gender", () => {
    cy.get('[data-cy="register-gender-MALE"]').check().should("be.checked");
    cy.get('[data-cy="register-gender-FEMALE"]').check().should("be.checked");
    cy.get('[data-cy="register-gender-RATHER_NOT_SAY"]').check().should("be.checked");
  });

  it("should toggle leaderboard consent checkbox", () => {
    cy.get('[data-cy="register-leaderboard-consent"]')
      .check()
      .should("be.checked");

    cy.get('[data-cy="register-leaderboard-consent"]')
      .uncheck()
      .should("not.be.checked");
  });

  it("should upload profile image", () => {
    cy.window().then((win) => {
      const blob = new Blob(["test"], { type: "image/png" });
      const file = new win.File([blob], "test.png", { type: "image/png" });

      cy.get('[data-cy="register-image-input"]').then((input) => {
        const el = input[0] as HTMLInputElement;

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        el.files = dataTransfer.files;

        el.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

    cy.get('[data-cy="register-image-reset"]', { timeout: 10000 })
      .should("exist");
  });

  it("should reject non-image file upload", () => {
    cy.get('[data-cy="register-image-input"]').selectFile(
      "cypress/fixtures/test.txt",
      { force: true }
    );

    cy.contains("Csak képfájl tölthető fel!").should("exist");
  });

  it("should reset profile image", () => {
    cy.window().then((win) => {
      const blob = new Blob(["test"], { type: "image/png" });
      const file = new win.File([blob], "test.png", { type: "image/png" });

      cy.get('[data-cy="register-image-input"]').then((input) => {
        const el = input[0] as HTMLInputElement;

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        el.files = dataTransfer.files;

        el.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

    cy.get('[data-cy="register-image-reset"]', { timeout: 10000 })
      .should("exist")
      .click();

    cy.get('[data-cy="register-image-reset"]').should("not.exist");
  });

  it("should submit form successfully and redirect to login", () => {
    const email = `test${Date.now()}@email.com`;

    cy.intercept("PUT", "/api/auth", {
      statusCode: 200,
      body: { success: true }
    });

    cy.get('[data-cy="register-name-input"]').type("Test User");
    cy.get('[data-cy="register-email-input"]').type(email);
    cy.get('[data-cy="register-phone-input"]').type("+36301234567");
    cy.get('[data-cy="register-password-input"]').type("12345");

    cy.get('[data-cy="register-submit-button"]').click();

    cy.url().should("include", "/login");
  });

  it("should handle server error", () => {
    cy.intercept("PUT", "/api/auth", {
      statusCode: 500,
      body: { message: "Server error" }
    });

    cy.get('[data-cy="register-name-input"]').type("Test User");
    cy.get('[data-cy="register-email-input"]').type("test@email.com");
    cy.get('[data-cy="register-phone-input"]').type("+36301234567");
    cy.get('[data-cy="register-password-input"]').type("12345");

    cy.get('[data-cy="register-submit-button"]').click();

    cy.contains("Server error").should("exist");
  });

  it("should redirect to verification page if needed", () => {
    cy.intercept("PUT", "/api/auth", {
      statusCode: 200,
      body: {
        needsVerification: true,
        email: "test@email.com"
      }
    });

    cy.get('[data-cy="register-name-input"]').type("Test User");
    cy.get('[data-cy="register-email-input"]').type("test@email.com");
    cy.get('[data-cy="register-phone-input"]').type("+36301234567");
    cy.get('[data-cy="register-password-input"]').type("12345");

    cy.get('[data-cy="register-submit-button"]').click();

    cy.url().should("include", "/verify-email");
  });
});
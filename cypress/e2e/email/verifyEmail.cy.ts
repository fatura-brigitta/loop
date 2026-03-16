describe("Email API - verify email", () => {
  it("should fail with invalid code", () => {
    cy.request({
      method: "POST",
      url: "/api/email/verify-email",
      headers: { origin: "http://localhost:3000" },
      body: {
        email: "test@test.com",
        code: "0000"
      },
      failOnStatusCode: false
    }).then((res) => {

      expect(res.status).to.eq(400)
    })
  })


  it("should fail with invalid body", () => {
    cy.request({
      method: "POST",
      url: "/api/email/verify-email",
      headers: { origin: "http://localhost:3000" },
      body: {},
      failOnStatusCode: false
    }).then((res) => {

      expect(res.status).to.eq(400)
    })
  })
})
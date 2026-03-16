describe("Email API - resend verification code", () => {
  it("should return ok even if user does not exist", () => {
    cy.request({
      method: "POST",
      url: "/api/email/resend-code",
      headers: { origin: "http://localhost:3000" },
      body: {
        email: "notexisting@test.com"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })

  it("should fail with invalid body", () => {
    cy.request({
      method: "POST",
      url: "/api/email/resend-code",
      headers: { origin: "http://localhost:3000" },
      body: {},
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})
describe("Password API", () => {

  const api = (options: any) =>
    cy.request({
      ...options,
      headers: {
        origin: "http://localhost:3000",
        ...options.headers
      }
    })

  describe("POST /api/password/forgot-password", () => {

    it("should return ok even if user does not exist", () => {
      api({
        method: "POST",
        url: "/api/password/forgot-password",
        body: {
          email: "notexisting@test.com"
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })

    it("should fail with invalid body", () => {
      api({
        method: "POST",
        url: "/api/password/forgot-password",
        body: {},
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })

  describe("POST /api/password/reset-password", () => {

    it("should fail when token missing", () => {
      cy.request({
        method: "POST",
        url: "/api/password/reset-password",
        body: {},
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })

    it("should fail with invalid token", () => {
      cy.request({
        method: "POST",
        url: "/api/password/reset-password",
        body: {
          token: "invalidtoken",
          password: "NewPassword123"
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })
})
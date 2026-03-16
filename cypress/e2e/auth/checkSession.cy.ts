describe("Auth API - Check Session", () => {
  it("should create browser session cookie when missing", () => {
    cy.request({
      method: "POST",
      url: "/api/auth/check-session"
    }).then((res) => {

      expect(res.status).to.eq(200)
      expect(res.body.loggedOut).to.eq(true)
    })
  })

  it("should return ok if browser session exists", () => {
    cy.request({
      method: "POST",
      url: "/api/auth/check-session",
      headers: {
        Cookie: "browserSession=true"
      }
    }).then((res) => {

      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })
})
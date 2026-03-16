describe("Admin Logout API", () => {
  it("should logout admin", () => {
    cy.request({
      method: "POST",
      url: "/api/admin/adminLogout"
    }).then((res) => {

      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })

  it("should clear admin auth cookie", () => {

    cy.request({
      method: "POST",
      url: "/api/admin/adminLogout"
    }).then((res) => {

      const cookies = res.headers["set-cookie"]

      expect(cookies).to.exist
      expect(cookies[0]).to.include("admin-auth")

    })

  })
})
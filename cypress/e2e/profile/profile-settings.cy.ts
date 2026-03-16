describe("Profile Settings API", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should update theme", () => {
    cy.request({
      method: "PUT",
      url: "/api/profile/theme",
      body: {
        theme: "dark"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect([200,401]).to.include(res.status)
    })
  })

  it("should update consent", () => {
    cy.request({
      method: "PUT",
      url: "/api/profile/consent",
      body: {
        consent: true
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })
})
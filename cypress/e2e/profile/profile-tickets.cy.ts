describe("Profile Tickets API", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should get tickets", () => {
    cy.request({
      method: "POST",
      url: "/api/profile",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property("active")
      expect(res.body).to.have.property("history")
    })
  })
})
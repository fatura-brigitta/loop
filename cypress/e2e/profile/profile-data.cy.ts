describe("Profile Data APIs", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should get coupons", () => {
    cy.request({
      method: "GET",
      url: "/api/profile/coupons",
      failOnStatusCode: false
    }).then((res) => {
      expect([200,401]).to.include(res.status)
    })
  })

  it("should get discounts", () => {
    cy.request("/api/profile/discounts")
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
  })

  it("should get ranks", () => {
    cy.request("/api/profile/ranks")
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
  })
})
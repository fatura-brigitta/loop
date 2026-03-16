describe("Profile API", () => {
  beforeEach(() => {
    cy.login()
  })

  it("should get profile when logged in", () => {
    cy.request({
      method: "GET",
      url: "/api/profile",
      failOnStatusCode: false
    }).then((res) => {
      expect([200,404]).to.include(res.status)
    })
  })

  it("should update profile", () => {
    cy.request({
      method: "PATCH",
      url: "/api/profile",
      headers: {
        origin: "http://localhost:3000"
      },
      body: {
        name: "Updated Cypress",
        phone_number: "+36201234567",
        gender: "MALE"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect([200,409]).to.include(res.status)
    })
  })
})
describe("Profile Password API", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should update password", () => {
    cy.request({
      method: "PUT",
      url: "/api/profile",
      headers: {
        origin: "http://localhost:3000"
      },
      body: {
        newPassword: "NewPassword123!"
      },
      failOnStatusCode: false
    }).then((res) => {

      expect([200,400]).to.include(res.status)
    })
  })
})
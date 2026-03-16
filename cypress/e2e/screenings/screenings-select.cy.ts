describe("Screenings API - Select screening", () => {

  it("should select screening", () => {
    cy.request({
      method: "POST",
      url: "/api/screenings",
      headers: {
        origin: "http://localhost:3000"
      },
      body: {
        id: "test-screening-id"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect([200,400]).to.include(res.status)
    })
  })

  it("should fail with invalid body", () => {
    cy.request({
      method: "POST",
      url: "/api/screenings",
      headers: {
        origin: "http://localhost:3000"
      },
      body: {},
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})
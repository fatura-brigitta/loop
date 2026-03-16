describe("Ticket API - Scan", () => {

  it("should reject invalid token", () => {
    cy.request({
      method: "GET",
      url: "/api/ticket/scan/invalid-token-that-does-not-exist",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.body.status).to.eq("INVALID")
    })
  })


  it("should reject short token", () => {
    cy.request({
      method: "GET",
      url: "/api/ticket/scan/123",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.body.status).to.eq("INVALID")
    })
  })

  it("should scan invalid ticket", () => {
    cy.request({
      method: "GET",
      url: "/api/ticket/scan/fake-token-that-does-not-exist",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.body.status).to.eq("INVALID")
    })
  })
})
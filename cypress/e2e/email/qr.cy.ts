describe("QR Email API", () => {
  it("should generate QR code for valid token", () => {
    cy.request({
      method: "GET",
      url: "/api/email/qr/a53722d80cd796044b8db4f833fbc0473b1cabc6db49c2ee011ee6985654ee2e"
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.headers["content-type"]).to.include("image/png")
    })
  })

  it("should fail with invalid token format", () => {
    cy.request({
      method: "GET",
      url: "/api/email/qr/invalid",
      failOnStatusCode: false
    }).then((res) => {

      expect(res.status).to.eq(400)
    })
  })

  it("should fail if token missing", () => {
    cy.request({
      method: "GET",
      url: "/api/email/qr/",
      failOnStatusCode: false
    }).then((res) => {

      expect(res.status).to.be.oneOf([400,404])
    })
  })
})
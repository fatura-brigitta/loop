describe("Payment Checkout API", () => {

  it("should fail without payment session", () => {
    cy.request({
      method: "POST",
      url: "/api/payment/checkout",
      body: {
        ticketTypes: ["Normál"]
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })

  it("should fail when no seat selected", () => {
    cy.setCookie("paymentSessionId", "fakeid")

    cy.request({
      method: "POST",
      url: "/api/payment/checkout",
      body: {
        ticketTypes: []
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([400,500])
    })
  })
})
describe("Payment API", () => {

  const api = (options: any) =>
    cy.request({
      ...options,
      headers: {
        origin: "http://localhost:3000",
        ...options.headers
      }
    })

  describe("POST /api/payment?action=create", () => {

    it("should fail without login/session cookies", () => {
      api({
        method: "POST",
        url: "/api/payment?action=create",
        body: {
          seatIds: ["test"],
          ticketTypes: ["Normál"]
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(401)
      })
    })

    it("should fail with invalid body", () => {
      api({
        method: "POST",
        url: "/api/payment?action=create",
        body: {},
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })

  describe("GET /api/payment?action=session", () => {

    it("should fail when no session cookie exists", () => {
      cy.request({
        method: "GET",
        url: "/api/payment?action=session",
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })

  describe("POST /api/payment?action=price", () => {

    it("should fail without session", () => {
      api({
        method: "POST",
        url: "/api/payment?action=price",
        body: {
          ticketTypes: ["Normál"]
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })

  describe("POST /api/payment?action=confirm", () => {

    it("should fail without session", () => {
      api({
        method: "POST",
        url: "/api/payment?action=confirm",
        body: {},
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })

  describe("Invalid action", () => {

    it("should return 400", () => {
      cy.request({
        method: "POST",
        url: "/api/payment?action=invalid",
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })
  })
})
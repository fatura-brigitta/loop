describe("Screenings API - GET", () => {

  it("should get screenings list", () => {
    cy.request({
      method: "GET",
      url: "/api/screenings",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property("screenings")
      expect(res.body).to.have.property("closedDay")
    })
  })

  it("should get screenings by date", () => {
    cy.request({
      method: "GET",
      url: "/api/screenings?date=2026-03-01",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property("screenings")
    })
  })
})
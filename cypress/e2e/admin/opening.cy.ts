describe("Opening Hours API", () => {
  it("should return opening hours for a valid date", () => {
    cy.request({
      method: "GET",
      url: "/api/admin/opening?date=2026-03-01"
    }).then((res) => {

      expect(res.status).to.eq(200)

      expect(res.body).to.exist
    })
  })


  it("should return null if date is missing", () => {
    cy.request({
      method: "GET",
      url: "/api/admin/opening"
    }).then((res) => {

      expect(res.status).to.eq(200)
      expect(res.body).to.eq(null)
    })
  })


  it("should return server error for invalid date format", () => {
    cy.request({
      method: "GET",
      url: "/api/admin/opening?date=invalid-date",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(500)
    })
  })


  it("should return opening structure", () => {
    cy.request("/api/admin/opening?date=2026-03-01")
      .then((res) => {
        if(res.body){
          expect(res.body).to.have.property("open")
          expect(res.body).to.have.property("close")
        }
      })
  })
})
describe("Screenings API - Hall load", () => {

  it("should fail if screeningId cookie missing", () => {
    cy.request({
      method: "PUT",
      url: "/api/screenings",
      headers: {
        origin: "http://localhost:3000"
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })

  it("should load hall seats", () => {

    cy.request("/api/screenings").then((screeningsRes) => {
      const screening = screeningsRes.body.screenings[0]

      if (!screening) return

      cy.request({
        method: "PUT",
        url: "/api/screenings",
        headers: {
          origin: "http://localhost:3000",
          Cookie: `screeningId=${screening.id}`
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property("hall")
        expect(res.body).to.have.property("chairs")
      })
    })
  })
})
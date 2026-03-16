describe("Admin Schedule API", () => {
  it("should return schedule for a valid date", () => {
    cy.request({
      method: "GET",
      url: "/api/admin/adminSchedule?date=2026-03-01"
    }).then((res) => {
      expect(res.status).to.eq(200)

      expect(res.body).to.have.property("halls")
      expect(res.body).to.have.property("screenings")

      expect(res.body.halls).to.be.an("array")
      expect(res.body.screenings).to.be.an("array")

      expect(res.body.halls.length).to.be.greaterThan(0)
    })
  })


  it("should return screenings with movie and hall relations", () => {
    cy.request("/api/admin/adminSchedule?date=2026-03-01")
      .then((res) => {

        const screening = res.body.screenings[0]

        expect(screening).to.have.property("movies")
        expect(screening).to.have.property("halls")
        expect(screening).to.have.property("screening_types")
      })
  })


  it("should fail if date is missing", () => {
    cy.request({
      method: "GET",
      url: "/api/admin/adminSchedule",
      failOnStatusCode: false
    }).then((res) => {

      expect(res.status).to.eq(400)
    })
  })


  it("should return dayStart and dayEnd", () => {
    cy.request("/api/admin/adminSchedule?date=2026-03-01")
      .then((res) => {

        expect(res.body).to.have.property("dayStart")
        expect(res.body).to.have.property("dayEnd")
      })
  })


  it("should return screenings inside the selected day", () => {
    cy.request("/api/admin/adminSchedule?date=2026-03-01")
      .then((res) => {
        const screening = res.body.screenings[0]

        expect(screening.start).to.exist
        expect(screening.end).to.exist
      })
  })
})
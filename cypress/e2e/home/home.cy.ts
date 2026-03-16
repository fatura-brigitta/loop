describe("Home API", () => {
  describe("GET /api/home/leaderboard", () => {

    it("should return leaderboard users", () => {
      cy.request("/api/home/leaderboard")
        .then((res) => {

          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")

        })
    })

    it("should return max 3 users", () => {
      cy.request("/api/home/leaderboard")
        .then((res) => {
          expect(res.body.length).to.be.lte(3)
        })
    })

    it("should contain required fields", () => {
      cy.request("/api/home/leaderboard")
        .then((res) => {
          if (res.body.length === 0) return

          const user = res.body[0]

          expect(user).to.have.property("name")
          expect(user).to.have.property("points")
        })
    })
  })

  describe("GET /api/home/movies", () => {

    it("should return movies array", () => {
      cy.request("/api/home/movies")
        .then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })

    it("should return max 5 movies", () => {
      cy.request("/api/home/movies")
        .then((res) => {
          expect(res.body.length).to.be.lte(5)
        })
    })

    it("should contain movie fields", () => {
      cy.request("/api/home/movies")
        .then((res) => {
          if (res.body.length === 0) return

          const movie = res.body[0]

          expect(movie).to.have.property("id")
          expect(movie).to.have.property("title")
          expect(movie).to.have.property("poster")
        })
    })
  })

  describe("GET /api/home/pricing", () => {
    
    it("should return pricing data", () => {
      cy.request("/api/home/pricing")
        .then((res) => {
          expect(res.status).to.eq(200)

          expect(res.body).to.have.property("screeningTypes")
          expect(res.body).to.have.property("ticketTypes")
          expect(res.body).to.have.property("basePrice")
        })
    })

    it("should return arrays for types", () => {
      cy.request("/api/home/pricing")
        .then((res) => {
          expect(res.body.screeningTypes).to.be.an("array")
          expect(res.body.ticketTypes).to.be.an("array")
        })
    })
  })
})
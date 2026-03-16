describe("Movies API", () => {

  const api = (options: any) =>
    cy.request({
      ...options,
      headers: {
        origin: "http://localhost:3000",
        ...options.headers
      }
    })

  describe("GET /api/movies", () => {

    it("should return movies", () => {
      cy.request("/api/movies")
        .then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })

    it("should contain movie fields", () => {
      cy.request("/api/movies")
        .then((res) => {
          if (res.body.length === 0) return

          const movie = res.body[0]

          expect(movie).to.have.property("id")
          expect(movie).to.have.property("title")
          expect(movie).to.have.property("poster")
        })
    })
  })

  describe("POST /api/movies", () => {

    it("should fail without movieId", () => {
      api({
        method: "POST",
        url: "/api/movies",
        body: {},
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })

    it("should set selected movie cookie", () => {
      api({
        method: "POST",
        url: "/api/movies",
        body: {
          movieId: "f00000000000000000000002"
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)

        const cookies = res.headers["set-cookie"]

        expect(cookies).to.exist
        expect(cookies[0]).to.include("selectedMovieId")
      })
    })
  })

  describe("DELETE /api/movies", () => {

    it("should clear selected movie cookie", () => {
      api({
        method: "DELETE",
        url: "/api/movies"
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })
  })
})
describe("Selected Movie API", () => {

  it("should set selectedMovie cookie", () => {
    cy.request({
      method: "POST",
      url: "/api/movies/selected-movie",
      body: {
        movieId: "f00000000000000000000002"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)

      const cookies = res.headers["set-cookie"]

      expect(cookies).to.exist
      expect(cookies[0]).to.include("selectedMovie")
    })
  })

  it("should fail without movieId", () => {
    cy.request({
      method: "POST",
      url: "/api/movies/selected-movie",
      body: {},
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})
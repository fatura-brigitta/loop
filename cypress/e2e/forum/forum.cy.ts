describe("Forum API", () => {

  const movieId = "f00000000000000000000002"

  const api = (options: any) =>
    cy.request({
      ...options,
      headers: {
        origin: "http://localhost:3000",
        ...options.headers
      }
    })

  describe("GET /api/forum", () => {
    it("should return empty array if movie param missing", () => {
      cy.request("/api/forum")
        .then((res) => {

          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })

    it("should return posts for movie", () => {
      cy.request(`/api/forum?movie=${movieId}`)
        .then((res) => {

          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })
  })

  describe("POST /api/forum", () => {
    it("should fail when not logged in", () => {
      api({
        method: "POST",
        url: "/api/forum",
        body: {
          movie_id: movieId,
          comment: "Cypress forum test",
          review: 4
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(401)
      })
    })

    it("should create forum post", () => {

      cy.loginUser()

      api({
        method: "POST",
        url: "/api/forum",
        body: {
          movie_id: movieId,
          comment: "Cypress forum post",
          review: 5
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property("id")
      })
    })
  })

  describe("POST /api/forum/reply", () => {
    it("should fail if not logged in", () => {
      api({
        method: "POST",
        url: "/api/forum/reply",
        body: {
          forum_id: "fakeid",
          comment: "reply"
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(401)
      })
    })
  })

  describe("POST /api/forum/vote", () => {
    it("should fail if not logged in", () => {
      api({
        method: "POST",
        url: "/api/forum/vote",
        body: {
          post_id: "fakeid",
          type: "LIKE"
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(401)
      })
    })
  })

  describe("Forum interactions when logged in", () => {
    const movieId = "f00000000000000000000002"

    const api = (options: any) =>
      cy.request({
        ...options,
        headers: {
          origin: "http://localhost:3000",
          ...options.headers
        }
      })

    let postId: string

    before(() => {
      cy.loginUser()

      api({
        method: "POST",
        url: "/api/forum",
        body: {
          movie_id: movieId,
          comment: "Cypress interaction test",
          review: 4
        }
      }).then((res) => {
        postId = res.body.id
      })
    })

    it("should create reply", () => {
      cy.loginUser()

      api({
        method: "POST",
        url: "/api/forum/reply",
        body: {
          forum_id: postId,
          comment: "Cypress reply test"
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.comment).to.eq("Cypress reply test")
      })
    })

    it("should like post", () => {
      cy.loginUser()

      api({
        method: "POST",
        url: "/api/forum/vote",
        body: {
          post_id: postId,
          type: "LIKE"
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.myVote).to.eq("LIKE")
      })
    })
  })
})
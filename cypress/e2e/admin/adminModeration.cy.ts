describe("Admin API - Moderation", () => {

  beforeEach(() => {
    cy.loginAdmin()
  })

  describe("Bad Words", () => {
    it("should get bad words list", () => {
      cy.request("/api/admin?entity=bad_words")
        .then((res) => {

          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })

    it("should replace bad words list", () => {
      cy.request({
        method: "POST",
        url: "/api/admin?entity=bad_words",
        body: {
          words: ["testbadword", "anotherbadword"]
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })

    it("should return newly saved bad words", () => {
      cy.request("/api/admin?entity=bad_words")
        .then((res) => {

          const words = res.body.map((w: any) => w.word)

          expect(words).to.include("testbadword")

        })
    })
  })

  describe("Flagged Comments", () => {
    it("should return flagged comments", () => {
      cy.request("/api/admin?entity=flagged_comments")
        .then((res) => {

          expect(res.status).to.eq(200)
          expect(res.body).to.be.an("array")
        })
    })

    it("should delete flagged comment if exists", () => {
      cy.request("/api/admin?entity=flagged_comments")
        .then((res) => {
          if (res.body.length === 0) return
          const comment = res.body[0]
          cy.request({
            method: "DELETE",
            url: "/api/admin?entity=flagged_comments",
            body: {
              id: comment.id,
              type: comment.type
            }
          }).then((deleteRes) => {

            expect(deleteRes.status).to.eq(200)
            expect(deleteRes.body.ok).to.eq(true)

          })
        })
    })
  })
})
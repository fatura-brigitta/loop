import { movieFactory } from "../../support/factories/movieFactory"

describe("Admin API", () => {
  describe("GET endpoints", () => {

    it("should get movies", () => {
      cy.request("/api/admin?entity=movies").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
    })

    it("should get halls", () => {
      cy.request("/api/admin?entity=halls").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
    })

    it("should get screening types", () => {
      cy.request("/api/admin?entity=screening_types").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
    })

    it("should get opening hours", () => {
      cy.request("/api/admin?entity=opening_hours").then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an("array")
      })
    })

    it("should fail with invalid entity", () => {
      cy.request({
        method: "GET",
        url: "/api/admin?entity=invalid",
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(400)
      })
    })

  })

  describe("Movie write endpoints", () => {
    beforeEach(() => {
      cy.loginAdmin()
    })

    it("should create a movie", () => {
      cy.request({
        method: "POST",
        url: "/api/admin?entity=movies",
        body: movieFactory()
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.title).to.contain("Cypress Test Movie")
      })
    })

    it("should delete movie", () => {
      cy.request({
        method: "POST",
        url: "/api/admin?entity=movies",
        body: movieFactory({
          title: "Delete Test Movie"
        })
      }).then((createRes) => {
        const id = createRes.body.id

        cy.request({
          method: "DELETE",
          url: "/api/admin?entity=movies",
          body: { id }
        }).then((deleteRes) => {
          expect(deleteRes.status).to.eq(200)
          expect(deleteRes.body.ok).to.eq(true)
        })
      })
    })

    it("should update movie", () => {
      cy.request({
        method: "POST",
        url: "/api/admin?entity=movies",
        body: movieFactory({
          title: "Update Test Movie"
        })
      }).then((createRes) => {
        const id = createRes.body.id

        cy.request({
          method: "PUT",
          url: "/api/admin?entity=movies",
          body: {
            id,
            title: "Updated Movie Title",
            playtime: 130
          }
        }).then((updateRes) => {
          expect(updateRes.status).to.eq(200)
          expect(updateRes.body.title).to.eq("Updated Movie Title")
        })
      })
    })
  })
})
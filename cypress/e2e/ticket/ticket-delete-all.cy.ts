describe("Ticket API - Delete all old tickets", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should delete all old tickets", () => {
    cy.request({
      method: "DELETE",
      url: "/api/ticket/delete-all",
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })
})
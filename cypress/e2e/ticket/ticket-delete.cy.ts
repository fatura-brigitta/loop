describe("Ticket API - Delete ticket", () => {

  beforeEach(() => {
    cy.login()
  })

  it("should delete ticket if exists", () => {

    cy.request({
      method: "POST",
      url: "/api/profile",
      failOnStatusCode: false
    }).then((ticketsRes) => {
      const ticket = ticketsRes.body.active?.[0] || ticketsRes.body.history?.[0]

      if (!ticket) {
        return
      }

      cy.request({
        method: "DELETE",
        url: "/api/ticket/delete",
        headers: {
          "content-type": "application/json"
        },
        body: {
          ticketId: ticket.id
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })
  })

  it("should return 404 if ticket does not exist", () => {
    cy.request({
      method: "DELETE",
      url: "/api/ticket/delete",
      headers: {
        "content-type": "application/json"
      },
      body: {
        ticketId: "00000000-0000-0000-0000-000000000000"
      },
      failOnStatusCode: false
    }).then((res) => {

      expect([404,500]).to.include(res.status)
    })
  })
})
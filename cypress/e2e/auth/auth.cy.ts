describe("Auth API", () => {
  const randomEmail = `cypress-${Date.now()}@test.com`

  describe("Register", () => {
    it("should register new user", () => {
      cy.request({
        method: "PUT",
        url: "/api/auth",
        headers: {
          origin: "http://localhost:3000"
        },
        body: {
          name: "Cypress User",
          email: randomEmail,
          password: "Password123!",
          phone_number: "+36201234567",
          gender: "MALE",
          consent: true
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.ok).to.eq(true)
      })
    })

    it("should fail with invalid phone", () => {
      cy.request({
        method: "PUT",
        url: "/api/auth",
        headers: { origin: "http://localhost:3000" },
        body: {
          name: "Test",
          email: `invalid-${Date.now()}@test.com`,
          password: "Password123!",
          phone_number: "123",
          gender: "MALE",
          consent: true
        },
        failOnStatusCode: false
      }).then((res) => {

        expect(res.status).to.eq(400)
      })
    })
  })

  describe("Login", () => {
    it("should login user", () => {
      cy.request({
        method: "POST",
        url: "/api/auth",
        headers: { origin: "http://localhost:3000" },
        body: {
          email: "dominikliszkai8@gmail.com",
          password: "dominik"
        },
        failOnStatusCode: false
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })

    it("should fail with wrong password", () => {
      cy.request({
        method: "POST",
        url: "/api/auth",
        headers: { origin: "http://localhost:3000" },
        body: {
          email: "dominikliszkai8@gmail.com",
          password: "Dominik"
        },
        failOnStatusCode: false
      }).then((res) => {

        expect(res.status).to.eq(401)
      })
    })
  })

  describe("Get user", () => {
    it("should fail when not logged in", () => {
      cy.request({
        method: "GET",
        url: "/api/auth",
        failOnStatusCode: false
      }).then((res) => {

        expect(res.status).to.eq(401)
      })
    })

    it("should return logged in user", () => {
      cy.loginUser()
      cy.request("/api/auth").then((res) => {

        expect(res.status).to.eq(200)
        expect(res.body).to.have.property("email")

      })
    })
  })

  describe("Logout", () => {
    it("should logout user", () => {
      cy.loginUser()

      cy.request({
        method: "DELETE",
        url: "/api/auth",
        headers: { origin: "http://localhost:3000" }
      }).then((res) => {

        expect(res.status).to.eq(200)
        expect(res.body.ok).to.eq(true)
      })
    })
  })
})
describe("Admin Login API", () => {
  const login = (body: any) =>
    cy.request({
      method: "POST",
      url: "/api/admin/adminLogin",
      body,
      failOnStatusCode: false
    })

  it("should login with valid credentials", () => {
    login({
      name: "admin1",
      password: "admin1"
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.ok).to.eq(true)
    })
  })

  it("should fail with wrong password", () => {
    login({
      name: "admin1",
      password: "wrongpassword"
    }).then((res) => {

      expect(res.status).to.eq(401)
    })
  })

  it("should fail if admin does not exist", () => {
    login({
      name: "notexisting",
      password: "123456"
    }).then((res) => {

      expect(res.status).to.eq(401)
    })
  })

  it("should fail with invalid body", () => {
    login({}).then((res) => {

      expect(res.status).to.eq(400)
    })
  })

  it("should set admin auth cookie", () => {
    login({
      name: "admin1",
      password: "admin1"
    }).then((res) => {

      const cookies = res.headers["set-cookie"]

      expect(cookies).to.exist
      expect(cookies[0]).to.include("admin-auth")
    })
  })
})
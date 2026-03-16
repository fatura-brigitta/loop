import { getSession, sessionOptions } from "../../../lib/session"

describe("session unit test", () => {

  before(() => {
    process.env.SESSION_PASSWORD =
      "a-very-long-random-super-secret-password-123456"
  })

  it("should use correct cookie name", () => {
    expect(sessionOptions.cookieName).to.eq("myapp_session")
  })

  it("should define cookie options", () => {
    expect(sessionOptions.cookieOptions).to.have.property("secure")
  })
})
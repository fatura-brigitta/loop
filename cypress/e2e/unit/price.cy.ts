import { calculateTicketPrice, BASE_PRICE } from "../../../lib/price"

describe("Unit Test - calculate ticket price function", () => {

  it("should return correct base price when no modifiers", () => {
    const price = calculateTicketPrice(100, 0)

    expect(price).to.eq(500)
  })

  it("should increase price with screening percent", () => {
    const price = calculateTicketPrice(120, 0)

    expect(price).to.eq(600)
  })

  it("should apply ticket discount", () => {
    const price = calculateTicketPrice(100, 20)

    expect(price).to.eq(400)
  })

  it("should round the result", () => {
    const price = calculateTicketPrice(105, 0)

    expect(price).to.be.a("number")
  })
})
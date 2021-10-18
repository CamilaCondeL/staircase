const staircase = require("./index")

describe("tests for staircase", () => {

  it("generates a staircase of 1 level", () => {

    const result = staircase(1);
    expect(result).toEqual("#");

  })
})
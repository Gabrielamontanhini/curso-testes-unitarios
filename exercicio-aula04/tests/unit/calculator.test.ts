import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const result = calculator.sum(2, 3)
    expect(result).toBe(5);
  });
  it("should subtract two numbers",async () => {
    const result = calculator.sub(10, 1)
    expect(result).toBe(9)
  })
  it("should multiply two numbers", async () => {
    const result = calculator.mul(3, 1)
    expect(result).toBe(3)  
  })
  it("should divide two numbers",async () => {
    const result = calculator.div(6, 2)
    expect(result).toBe(3)
  })
  it("should return 0 when divided by zero", async () => {
    const result = calculator.div(1000, 0)
    expect(result).toBe(0)
  })
})
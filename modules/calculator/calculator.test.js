import calculator from "./calculator.js";

test("calculator module exports an object", () => {
  expect(calculator).toBeInstanceOf(Object);
});

test("calculator.add method adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator.add method adds 0.5 + 0.3 to equal 0.8", () => {
  expect(calculator.add(0.5, 0.3)).toBeCloseTo(0.8);
});

test("calculator.subtract method subtracts 10 - 5 to equal 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("calculator.subtract method subtracts 0.6 - 0.2 to equal 0.4", () => {
  expect(calculator.subtract(0.6, 0.2)).toBeCloseTo(0.4);
});

test("calculator.divide method divides 30 / 3 to equal 10", () => {
  expect(calculator.divide(30, 3)).toBe(10);
});

test("calculator.divide method divides 15 / 2 to equal 7.5", () => {
  expect(calculator.divide(15, 2)).toBe(7.5);
});

test("calculator.multiply method multiplies 30 * 3 to equal 90", () => {
  expect(calculator.multiply(30, 3)).toBe(90);
});

test("calculator.multiply method multiplies 3.3 * 5.5 to equal 18.15", () => {
  expect(calculator.multiply(3.3, 5.5)).toBeCloseTo(18.15);
});

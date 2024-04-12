import sum from "./sum";

test("sum module exports a function", () => {
  expect(sum).toBeInstanceOf(Function);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

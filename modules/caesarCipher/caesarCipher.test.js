import caesarCipher from "./caesarCipher.js";

test("caesarCipher module exports an function", () => {
  expect(caesarCipher).toBeInstanceOf(Function);
});

test("cipher 'hello', shifting 5 characters", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("cipher 'what a lovely day, except it rains', shifting 7 characters", () => {
  expect(caesarCipher("what a lovely day, except it rains", 7)).toBe(
    "doha h svclsf khf, lejlwa pa yhpuz"
  );
});

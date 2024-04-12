import capitalize from "./capitalize.js";

test("capitalize module exports a function ", () => {
  expect(capitalize).toBeInstanceOf(Function);
});

test("returns empty string when string is empty", () => {
  expect(capitalize("")).toBe("");
});

test("capitalizes a string 'a'", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes a string 'hi'", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("capitalizes a string 'hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes a string 'whats up!'", () => {
  expect(capitalize("whats up!")).toBe("Whats up!");
});

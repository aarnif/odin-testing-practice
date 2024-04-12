import reverseString from "./reverseString.js";

test("reverseString module exports a function ", () => {
  expect(reverseString).toBeInstanceOf(Function);
});

test("returns empty string when parameter string is empty", () => {
  expect(reverseString("")).toBe("");
});

test("returns same string if length is 1", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverses string 'hi'", () => {
  expect(reverseString("hi")).toBe("ih");
});

test("reverses string 'hello'", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses string 'whats up!'", () => {
  expect(reverseString("whats up!")).toBe("!pu stahw");
});

test("reverses string 'level'", () => {
  expect(reverseString("level")).toBe("level");
});

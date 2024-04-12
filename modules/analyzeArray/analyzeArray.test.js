import analyzeArray from "./analyzeArray";

test("analyzeArray module exports an object", () => {
  expect(analyzeArray).toBeInstanceOf(Object);
});

test("returns an object with average, min, max and length properties", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray).toHaveProperty("average");
  expect(analyzedArray).toHaveProperty("min");
  expect(analyzedArray).toHaveProperty("max");
  expect(analyzedArray).toHaveProperty("length");
});

test("returns empty array if input is empty array", () => {
  const testArray = [];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray).toEqual([]);
});

test("returns correct average, min, max and length properties", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray.average).toBe(4);
  expect(analyzedArray.min).toBe(1);
  expect(analyzedArray.max).toBe(8);
  expect(analyzedArray.length).toBe(6);
});

test("returns correct average, min, max and length properties for negative numbers", () => {
  const testArray = [-1, -8, -3, -4, -2, -6];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray.average).toBe(-4);
  expect(analyzedArray.min).toBe(-8);
  expect(analyzedArray.max).toBe(-1);
  expect(analyzedArray.length).toBe(6);
});

test("returns correct average, min, max and length properties for float numbers", () => {
  const testArray = [0, 0.3, 1.1, 3.0, 4.5, 6.2];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray.average).toBeCloseTo(2.52);
  expect(analyzedArray.min).toBe(0);
  expect(analyzedArray.max).toBe(6.2);
  expect(analyzedArray.length).toBe(6);
});

test("returns correct average, min, max and length properties for array of zeros", () => {
  const testArray = [0, 0, 0, 0, 0, 0];
  const analyzedArray = analyzeArray(testArray);

  expect(analyzedArray.average).toBe(0);
  expect(analyzedArray.min).toBe(0);
  expect(analyzedArray.max).toBe(0);
  expect(analyzedArray.length).toBe(6);
});

const devLib = require("../lib/dev");
const prodLib = require("../lib/prod");

test("No arguments", () => {
  expect(devLib()).toBe(null);
});

test("No arguments, false on empty", () => {
  expect(devLib(undefined, false)).toBe(false);
});

test("No arguments, false on empty", () => {
  expect(devLib(undefined, "false")).toBe("false");
});

test("One argument true", () => {
  expect(devLib(true)).toBe(true);
});

test("One argument false", () => {
  expect(devLib(false)).toBe(false);
});

test("Two arguments true", () => {
  expect(devLib(true, true)).toBe(true);
});

test("Two arguments false", () => {
  expect(devLib(false, false)).toBe(false);
});

test("Two arguments true/false", () => {
  expect(devLib(true, false)).toBe(true);
});

test("Two arguments false/true", () => {
  expect(devLib(false, true)).toBe(true);
});

test("Two arguments true, 1", () => {
  expect(devLib(true, 1)).toBe(true);
});

test('Two arguments true "foo"', () => {
  expect(devLib(true, "foo")).toBe(true);
});

test('Two arguments false "foo"', () => {
  expect(devLib(false, "foo")).toBe("foo");
});

// Faulty input
test("Bad input", () => {
  expect(devLib(1)).toBe(1);
});

test("Bad input", () => {
  expect(devLib("hello")).toBe("hello");
});

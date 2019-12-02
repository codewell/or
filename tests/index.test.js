const or = require('../lib/prod');

test('No arguments', () => {
  expect(or())
    .toBe(true)
});

test('No arguments, false on empty', () => {
  expect(or(undefined, false))
    .toBe(false)
});

test('No arguments, false on empty', () => {
  expect(or(undefined, 'false'))
    .toBe(false)
});

test('No arguments, false on empty', () => {
  expect(() => {
    or(undefined, 'throw')
  }).toThrow()
});

test('No arguments', () => {
  expect(or([]))
    .toBe(true)
});

test('One argument true', () => {
  expect(or([true]))
    .toBe(true)
});

test('One argument false', () => {
  expect(or([false]))
    .toBe(false)
});

test('Two arguments true', () => {
  expect(or([true, true]))
    .toBe(true)
});

test('Two arguments false', () => {
  expect(or([false, false]))
    .toBe(false)
});

test('Two arguments true/false', () => {
  expect(or([true, false]))
    .toBe(true)
});

test('Two arguments false/true', () => {
  expect(or([false, true]))
    .toBe(true)
});

test('Two arguments true, 1', () => {
  expect(or([true, 1]))
    .toBe(true)
});

test('Two arguments true "foo"', () => {
  expect(or([true, 'foo']))
    .toBe(true)
});

test('Two arguments false "foo"', () => {
  expect(or([false, 'foo']))
    .toBe(false)
});

test('Two arguments false "foo"', () => {
  expect(or([false, 'foo']))
    .toBe(false)
});

// Faulty input
test('Bad input', () => {
  expect(() => {
    or(1)
  })
    .toThrow()
});

test('Bad input', () => {
  expect(() => {
    or('hello')
  })
    .toThrow()
});

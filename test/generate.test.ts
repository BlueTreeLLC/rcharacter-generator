import generator from "../src";

test('expect empty options to be all lowercase values', () => {
  const test = generator(10);

  expect(/[a-z]/g.test(test)).toBe(true);
  expect(/[A-Z]/g.test(test)).not.toBe(true);
});

test('expect uppercase & lowercase values if options are passed saying so', () => {
  const test = generator(10, { lowercaseLetters: true, uppercaseLetters: true });

  expect(/[A-z]/g.test(test)).toBe(true);
  expect(/[0-9]/g.test(test)).not.toBe(true);
});

test('expect all types of letters and numbers if options are passed saying so', () => {
  const test = generator(10, { lowercaseLetters: true, uppercaseLetters: true, numbers: true });

  expect(/[A-z0-9]/g.test(test)).toBe(true);
  expect(/!@#$%^&*()_\-\+=/g.test(test)).not.toBe(true);
});

test('expect all types of values if all options are enabled', () => {
  const test = generator(10, {
    lowercaseLetters: true,
    uppercaseLetters: true,
    numbers: true,
    specialSymbols: true,
  });

  expect(/[A-z0-9!@#$%^&*()_\-+=]/g.test(test)).toBe(true);
});

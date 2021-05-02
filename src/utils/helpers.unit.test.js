import {degreesToRadians} from './helpers';

test('degreesToRadians with an input of 0 should equal 0', () => {
  expect(degreesToRadians(0)).toBe(0);
});

test('degreesToRadians with an input of 90 should equal 1.5707963268', () => {
  let result = degreesToRadians(90);

  expect(Math.abs(result - 1.5707963268) <= 10e-6).toBe(true);
});

test('degreesToRadians with an input of 180 should equal 3.1415926536', () => {
  let result = degreesToRadians(180);

  expect(Math.abs(result - 3.1415926536) <= 10e-6).toBe(true);
});

test('degreesToRadians with an input of 270 should equal 4.7123889804', () => {
  let result = degreesToRadians(270);

  expect(Math.abs(result - 4.7123889804) <= 10e-6).toBe(true);
});

test('degreesToRadians with an input of 360 should equal 6.2831853072', () => {
  let result = degreesToRadians(360);

  expect(Math.abs(result - 6.2831853072) <= 10e-6).toBe(true);
});

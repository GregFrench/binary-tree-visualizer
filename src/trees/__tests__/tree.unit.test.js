import { newNode } from '../tree';

test('newNode with an input of 0 should create a new node with a key of 0 and left/right branches equal to null', () => {
  const key = 0;

  expect(newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 1 should create a new node with a key of 1 and left/right branches equal to null', () => {
  const key = 1;

  expect(newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of -1 should create a new node with a key of -1 and left/right branches equal to null', () => {
  const key = -1;

  expect(newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 5 should create a new node with a key of 5 and left/right branches equal to null', () => {
  const key = 5;

  expect(newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 2147483647 should create a new node with a key of 2147483647 and left/right branches equal to null', () => {
  const key = 2147483647;

  expect(newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

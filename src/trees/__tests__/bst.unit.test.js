import trees from '../';

const bst = trees.bst;

test('newNode with an input of 0 should create a new node with a key of 0 and left/right branches equal to null', () => {
  const key = 0;

  expect(bst.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 1 should create a new node with a key of 1 and left/right branches equal to null', () => {
  const key = 1;

  expect(bst.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of -1 should create a new node with a key of -1 and left/right branches equal to null', () => {
  const key = -1;

  expect(bst.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 5 should create a new node with a key of 5 and left/right branches equal to null', () => {
  const key = 5;

  expect(bst.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('newNode with an input of 2147483647 should create a new node with a key of 2147483647 and left/right branches equal to null', () => {
  const key = 2147483647;

  expect(bst.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('insert with an input of null and 0 creates a node with key 0 and left/right branches equal to null', () => {
  const key = 0;

  expect(bst.insert(null, key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('insert with an input of key 5 after 10 creates a new node on the left branch of the root', () => {
  let root = null;
  const key = 5;

  root = bst.insert(root, 10);

  expect(bst.insert(root, key).left).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('insert with an input of key 15 after 10 creates a new node on the right branch of the root', () => {
  let root = null;
  const key = 15;

  root = bst.insert(root, 10);

  expect(bst.insert(root, key).right).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('insert with an input of key 3 after 5 and 10 creates two new nodes on the left branch of the root', () => {
  let root = null;
  const key = 3;

  root = bst.insert(root, 10);
  root = bst.insert(root, 5);

  expect(bst.insert(root, key).left.left).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('insert with an input of key 18 after 15 and 10 creates two new nodes on the right branch of the root', () => {
  let root = null;
  const key = 18;

  root = bst.insert(root, 10);
  root = bst.insert(root, 15);

  expect(bst.insert(root, key).right.right).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('search with an input of null and 0 returns null', () => {
  const key = 0;

  expect(bst.search(null, key)).toEqual(null);
});

test('search with an input of key 5 after inserting key 10 returns null', () => {
  let root = null;
  const key = 5;

  root = bst.insert(root, 10);

  expect(bst.search(root, key)).toEqual(null);
});

test('search with an input of key 10 after inserting key 10 returns the correct node', () => {
  let root = null;
  const key = 10;

  root = bst.insert(root, key);

  expect(bst.search(root, key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('search with an input of key 5 after inserting key 10 and 5 returns the correct node', () => {
  let root = null;
  const key = 5;

  root = bst.insert(root, 10);
  bst.insert(root, key);

  expect(bst.search(root, key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('search with an input of key 15 after inserting key 10 returns null', () => {
  let root = null;
  const key = 15;

  root = bst.insert(root, 10);

  expect(bst.search(root, key)).toEqual(null);
});

test('search with an input of key 15 after inserting key 10 and 15 returns the correct node', () => {
  let root = null;
  const key = 15;

  root = bst.insert(root, 10);
  bst.insert(root, key);

  expect(bst.search(root, key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

test('deleteNode with an input of null and 0 returns null', () => {
  const key = 0;

  expect(bst.deleteNode(null, key)).toEqual(null);
});

test('deleteNode with an input of key 10 after inserting key 10 returns null', () => {
  let root = null;
  const key = 10;

  root = bst.insert(root, 10);

  expect(bst.deleteNode(root, key)).toEqual(null);
});

test('deleteNode with an input of key 5 after inserting key 10 and 5 returns the correct node', () => {
  let root = null;
  const key = 5;
  const rootKey = 10;

  root = bst.insert(root, rootKey);
  bst.insert(root, key);

  expect(bst.deleteNode(root, key)).toStrictEqual({
    key: rootKey,
    'left': null,
    'right': null,
  });
});

test('deleteNode with an input of key 15 after inserting key 10 and 15 returns the correct node', () => {
  let root = null;
  const key = 15;
  const rootKey = 10;

  root = bst.insert(root, rootKey);
  bst.insert(root, key);

  expect(bst.deleteNode(root, key)).toStrictEqual({
    key: rootKey,
    'left': null,
    'right': null,
  });
});
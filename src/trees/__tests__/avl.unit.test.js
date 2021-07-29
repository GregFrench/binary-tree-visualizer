import trees from '../';

const avl = trees.avl;

test('newNode with an input of 0 should create a new node with a key of 0 and left/right branches equal to null', () => {
  const key = 0;

  expect(avl.newNode(key)).toStrictEqual({
    key,
    'left': null,
    'right': null,
  });
});

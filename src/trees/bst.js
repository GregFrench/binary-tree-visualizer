import { newNode } from './tree';

const insert = (node, key) => {
  if (node === null) {
    return newNode(key);
  }

  if (key < node.key) {
    node.left = insert(node.left, key);
  } else if (key >= node.key) {
    node.right = insert(node.right, key);
  }

  return node;
};

const search = (node, key) => {
  if (node === null || node.key === key) {
    return node;
  }

  if (key < node.key) {
    return search(node.left, key);
  }

  return search(node.right, key);
};

const minValue = (node) => {
  let min = node.key;

  while (node.left !== null) {
    min = node.left.key;
    node = node.left;
  }

  return min;
};

const deleteNode = (node, key) => {
  if (node === null) {
    return null;
  }

  if (key < node.key) {
    node.left = deleteNode(node.left, key);
  } else if (key > node.key) {
    node.right = deleteNode(node.right, key);
  } else {
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    node.key = minValue(node.right);
    node.right = deleteNode(node.right, node.key);
  }

  return node;
};

const bst = {
  deleteNode,
  insert,
  newNode,
  search,
};

export default bst;

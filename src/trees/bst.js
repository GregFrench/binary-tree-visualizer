const newNode = (key) => {
  return {
    key,
    left: null,
    right: null,
  };
};

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

const deleteNode = (node, key) => {
  return null;
};

const bst = {
  deleteNode,
  insert,
  newNode,
  search,
};

export default bst;

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

const bst = {
  insert,
  newNode,
};

export default bst;

import Dropdown from './Dropdown';

function Header() {
  let treeItems = [
    'Binary Search Tree',
    'AVL Tree',
    'Red Black Tree',
    'Splay Tree',
    'Treap'
  ];

  let algorithmItems = [
    'Preorder Traversal',
    'Inorder Traversal',
    'Postorder Traversal',
    'Level Order Traversal'
  ];

  return (
    <header className="bg-green-500">
      <div className="container mx-auto flex">
        <h1 className="pr-3 py-2 text-xl text-white">Binary Tree Visualizer</h1>
        <Dropdown title={'Tree'} items={treeItems}></Dropdown>
        <Dropdown title={'Algorithm'} items={algorithmItems}></Dropdown>
      </div>
    </header>
  );
}

export default Header;

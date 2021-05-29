function Header(props) {
  return (
    <header className="bg-green-500">
      <div className="container mx-auto flex">
        <h1 className="pr-3 py-2 text-xl text-white">Binary Tree Visualizer</h1>
        {props.children}
      </div>
    </header>
  );
}

export default Header;

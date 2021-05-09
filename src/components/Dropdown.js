function Dropdown(props) {
  let title = props.title;
  let items = props.items;

  return (
    <div className="dropdown float-right pl-6 relative text-white">
      <div class="dropbtn cursor-pointer p-3">
        <span>{title}</span> 
        <span className="pl-3"><i class="fas fa-caret-down"></i></span>
      </div>
      <div class="dropdown-content bg-green-500 hidden">
        {items.map((item) => {
          return (
            <span className="text-white block cursor-pointer px-4 py-3">{item}</span>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;

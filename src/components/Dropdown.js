function Dropdown(props) {
  let title = props.title;
  let items = props.items;
  let setSelectedValue = props.setSelectedValue;

  return (
    <div className="dropdown float-right relative text-white">
      <div className="dropbtn cursor-pointer p-3 px-4">
        <span>{title}</span> 
        <span className="pl-3"><i className="fas fa-caret-down"></i></span>
      </div>
      <div className="dropdown-content absolute bg-green-500 hidden min-w-max right-0 rounded-b-lg shadow-lg z-10">
        {items.map((item) => {
          return (
            <span
              className="block cursor-pointer hover:bg-green-700 px-4 py-3 text-white"
              onClick={() => setSelectedValue(item.value)}
            >{item.label}</span>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;

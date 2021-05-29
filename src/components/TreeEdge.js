function TreeEdge(props) {
  let coords = props.coordinates;

  return (
    <line
      x1={coords.x1}
      y1={coords.y1}
      x2={coords.x2}
      y2={coords.y2}
      className="stroke-current stroke-2 text-black-500"
    />
  );
}

export default TreeEdge;

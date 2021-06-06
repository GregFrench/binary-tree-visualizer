function TreeNode(props) {
  let coords = props.coordinates;
  let radius = props.radius;

  return (
    <g className="fade-in">
      <circle
        cx={coords.x}
        cy={coords.y}
        r={radius}
        stroke="black"
        strokeWidth="3"
        fill="white"
      />

      <text
        x={coords.x}
        y={parseInt(coords.y) + 5}
        textAnchor="middle"
        fill="black"
        fontWeight="bold"
      >
        {props.value}
      </text>
    </g>
  );
}

export default TreeNode;
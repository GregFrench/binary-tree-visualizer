function Node(props) {
  let coords = props.coordinates;
  let radius = props.radius;

  return (
    <g>
      <circle
        cx={coords.x}
        cy={coords.y}
        r={radius}
        stroke="black"
        stroke-width="3"
        fill="white"
      />

      <text
        x={coords.x}
        y={parseInt(coords.y) + 5}
        text-anchor="middle"
        fill="black"
        font-weight="bold"
      >
        {props.value}
      </text>
    </g>
  );
}

export default Node;
import TreeEdge from './TreeEdge.js';
import {degreesToRadians} from '../utils/helpers.js';

function TreeEdges(props) {
  let coords = props.coordinates;
  let radius = parseFloat(props.nodeRadius);
  let length = props.edgeLength;
  let cx = parseFloat(coords.nodeCenterX);
  let cy = parseFloat(coords.nodeCenterY);
  let degreesLeft = 135;
  let degreesRight = 45;

  return (
    <g>
      <TreeEdge coordinates={{
        x1: radius * Math.cos(degreesToRadians(degreesLeft)) + cx,
        y1: radius * Math.sin(degreesToRadians(degreesLeft)) + cy,
        x2: length * Math.cos(degreesToRadians(degreesLeft)) + cx,
        y2: length * Math.sin(degreesToRadians(degreesLeft)) + cy
      }}></TreeEdge>

      <TreeEdge coordinates={{
        x1: radius * Math.cos(degreesToRadians(degreesRight)) + cx,
        y1: radius * Math.sin(degreesToRadians(degreesRight)) + cy,
        x2: length * Math.cos(degreesToRadians(degreesRight)) + cx,
        y2: length * Math.sin(degreesToRadians(degreesRight)) + cy
      }}></TreeEdge>
    </g>
  );
}

export default TreeEdges;

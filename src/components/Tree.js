import TreeNode from './TreeNode.js';
import TreeEdges from './TreeEdges.js';
import {degreesToRadians} from '../utils/helpers';

function Tree() {
  const nodeRadius = 50;
  let edgeLength = nodeRadius + 150;
  let nodeCenterX = 500;
  let nodeCenterY = 60;
  let degreesLeft = 135;
  let degreesRight = 45;

  return (
    <div className="flex justify-center">
      <svg height="1000" width="1000">
        <TreeNode coordinates={{
          x: nodeCenterX,
          y: nodeCenterY
        }}
        radius={nodeRadius}
        value="10"></TreeNode>

        <TreeEdges
          coordinates={{
            nodeCenterX: nodeCenterX,
            nodeCenterY: nodeCenterY
          }}
          nodeRadius={nodeRadius}
          edgeLength={edgeLength}
        >
        </TreeEdges>

        <TreeNode coordinates={{
          x: (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degreesLeft)) + nodeCenterX,
          y: (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degreesLeft)) + nodeCenterY
        }}
        radius={nodeRadius}
        value="5"></TreeNode>

        <TreeNode coordinates={{
          x: (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degreesRight)) + nodeCenterX,
          y: (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degreesRight)) + nodeCenterY
        }}
        radius={nodeRadius}
        value="15"></TreeNode>
      </svg>
    </div>
  );
}

export default Tree;
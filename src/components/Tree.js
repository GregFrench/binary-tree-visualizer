import TreeNode from './TreeNode.js';
import TreeEdge from './TreeEdge.js';
import {degreesToRadians} from '../utils/helpers';
import Queue from 'queue-fifo';

function Tree() {
  const nodeRadius = 50;
  let edgeLength = nodeRadius + 150;
  let nodeCenterX = 500;
  let nodeCenterY = 60;
  let degreesLeft = 135;
  let degreesRight = 45;
  let data = [10, 5, 15, 2, 7, 13, 17];
  let numNodes = data.length;
  let levels = Math.ceil(Math.log(numNodes) / Math.log(2));
  let depthIndex = -1;
  let prevDepth = 0;
  var queue = new Queue();

  return (
    <div className="flex justify-center">
      <svg height="1000" width="1000">
        {
          data.map((item, index) => {
            let depth = Math.floor(Math.log(index + 1) / Math.log(2));

            if (depth !== prevDepth) {
              depthIndex = -1;
            }

            prevDepth = depth;

            depthIndex++;
            let elem;

            queue.enqueue({nodeCenterX, nodeCenterY});

            if (depth < levels - 1 && depthIndex % 2 === 0) {
              elem = (
                <g>
                  <TreeNode coordinates={{
                    x: nodeCenterX,
                    y: nodeCenterY
                  }}
                  radius={nodeRadius}
                  value={item}></TreeNode>

                  <TreeEdge
                    coordinates={{
                      x1: nodeRadius * Math.cos(degreesToRadians(degreesLeft)) + nodeCenterX,
                      y1: nodeRadius * Math.sin(degreesToRadians(degreesLeft)) + nodeCenterY,
                      x2: edgeLength * Math.cos(degreesToRadians(degreesLeft)) + nodeCenterX,
                      y2: edgeLength * Math.sin(degreesToRadians(degreesLeft)) + nodeCenterY
                    }}
                  >
                  </TreeEdge>

                  <TreeEdge coordinates={{
                    x1: nodeRadius * Math.cos(degreesToRadians(degreesRight)) + nodeCenterX,
                    y1: nodeRadius * Math.sin(degreesToRadians(degreesRight)) + nodeCenterY,
                    x2: edgeLength * Math.cos(degreesToRadians(degreesRight)) + nodeCenterX,
                    y2: edgeLength * Math.sin(degreesToRadians(degreesRight)) + nodeCenterY
                  }}></TreeEdge>
                </g>
              )
            } else {
              elem = (
                <TreeNode coordinates={{
                  x: nodeCenterX,
                  y: nodeCenterY
                }}
                radius={nodeRadius}
                value={item}></TreeNode>
              )
            }

            nodeCenterX = (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degreesLeft)) + nodeCenterX;
            nodeCenterY = (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degreesLeft)) + nodeCenterY;

            return elem;
          })
        }
      </svg>
    </div>
  );
}

export default Tree;

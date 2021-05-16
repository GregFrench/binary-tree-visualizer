import TreeNode from './TreeNode.js';
import {degreesToRadians} from '../utils/helpers';
import Queue from 'queue-fifo';

function Tree() {
  const nodeRadius = 35;
  let edgeLength = nodeRadius + 300;
  let nodeCenterX = 750;
  let nodeCenterY = 60;
  let degreesLeft = 165;
  let degreesRight = 15;
  let data = [
    {
      val: 10,
    },
    {
      val: 5,
    },
    {
      val: 15,
    },
    {
      val: 2,
    },
    {
      val: 7,
    },
    {
      val: 13,
    },
    {
      val: 17,
    },
    {
      val: 18,
    },
    {
      val: 19,
    },
    {
      val: 20,
    },
    {
      val: 21,
    },
    {
      val: 22,
    },
    {
      val: 23,
    },
    {
      val: 24,
    },
    {
      val: 25,
    }
  ];
  let numNodes = data.length;
  let levels = Math.ceil(Math.log(numNodes) / Math.log(2));
  let depthIndex = -1;
  let prevDepth = 0;
  var queue = new Queue();
  let newDepth = false;

  function parent(i) {
    return parseInt((i - 1) / 2, 10);
  }

  return (
    <div className="flex justify-center">
      <svg height="2000" width="100%">
        {
          data.map((item, index) => {
            let depth = Math.floor(Math.log(index + 1) / Math.log(2));

            // new level is reached
            if (depth !== prevDepth) {
              newDepth = true;
              depthIndex = -1;
            }

            prevDepth = depth;

            depthIndex++;
            let elem;

            queue.enqueue({nodeCenterX, nodeCenterY});
            console.log(depthIndex);

            if (newDepth === true) {
              degreesLeft -= 15;
              degreesRight += 15;
              edgeLength -= 10;
              newDepth = false;
            }

            // root node
            if (index === 0) {
              data[0].nodeCenterX = nodeCenterX;
              data[0].nodeCenterY = nodeCenterY;
            } else {
              if (depthIndex % 2 === 0) {
                data[index].nodeCenterX = (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degreesLeft)) + data[parent(index)].nodeCenterX;
                data[index].nodeCenterY = (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degreesLeft)) + data[parent(index)].nodeCenterY;
              } else {
                data[index].nodeCenterX = (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degreesRight)) + data[parent(index)].nodeCenterX;
                data[index].nodeCenterY = (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degreesRight)) + data[parent(index)].nodeCenterY;
              }
            }

            console.log(data[index])

            if (depth < levels - 1 && depthIndex % 2 === 0) {
              elem = (
                <g>
                  <TreeNode coordinates={{
                    x: data[index].nodeCenterX,
                    y: data[index].nodeCenterY
                  }}
                  radius={nodeRadius}
                  value={item.val}></TreeNode>
                </g>
              )
            } else {
              elem = (
                <g>
                  <TreeNode coordinates={{
                    x: data[index].nodeCenterX,
                    y: data[index].nodeCenterY
                  }}
                  radius={nodeRadius}
                  value={item.val}></TreeNode>
                </g>
              )
            }

            return elem;
          })
        }
      </svg>
    </div>
  );
}

export default Tree;

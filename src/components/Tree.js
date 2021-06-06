import React, { useEffect, useState } from 'react';
import TreeNode from './TreeNode.js';
import {degreesToRadians} from '../utils/helpers';
var Queue = require('queue-fifo');

const Tree = (props) => {
  const treeType = props.type;
  const nodeRadius = 50;
  let edgeLength = nodeRadius + 150;
  let nodeCenterX = 750;
  let nodeCenterY = 60;
  let degreesLeft = 165;
  let degreesRight = 15;
  let depthIndex = -1;
  let prevDepth = 0;
  let newDepth = false;
  const [data, setData] = useState([]);

  let tree = {
    val: 15,
    left: {
      val: 7,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 10,
        left: null,
        right: null,
      },
    },
    right: {
      val: 18,
      left: {
        val: 16,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: null,
        right: null,
      },
    }
  };

  const generateTree = (root) => {
    if (root === null) {
      return;
    }

    queue.enqueue(root);

    let node = queue.dequeue();

    let arr = [...data];

    arr.push({
      val: node.val
    });

    setData(arr);

    setTimeout(() => {
      console.log(node);
      generateTree(node.left);
      generateTree(node.right);
    }, 1000);
  };

  useEffect(() => {
    generateTree(tree);
  }, []);

  var queue = new Queue();

  let numNodes = data.length;
  let levels = Math.ceil(Math.log(numNodes) / Math.log(2));
  
  // initial tree edge size doubles when tree doubles
  const edgeProportionality = Math.log(levels) / Math.log(2);

  edgeLength *= edgeProportionality;

  function parent(i) {
    return parseInt((i - 1) / 2, 10);
  }

  if (treeType !== 'bst') {
    return null;
  }

  return (
    <div className="flex justify-center">
      <svg height="2000" width="100%">
        {
          data.map((item, index) => {
            let arr = [...data];
            console.log(index)
            let depth = Math.floor(Math.log(index + 1) / Math.log(2));

            // new level is reached
            if (depth !== prevDepth) {
              newDepth = true;
              depthIndex = -1;
            }

            prevDepth = depth;

            depthIndex++;
            let elem;

            if (newDepth === true) {
              degreesLeft -= 25;
              degreesRight += 25;
              edgeLength -= 10;
              newDepth = false;
            }

            // root node
            if (index === 0) {
              data[0].nodeCenterX = nodeCenterX;
              data[0].nodeCenterY = nodeCenterY;
              //setData(arr);
            } else {
              let degrees;

              if (depthIndex % 2 === 0) {
                degrees = degreesLeft;
              } else {
                degrees = degreesRight;
              }

              data[index].nodeCenterX = (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degrees)) + data[parent(index)].nodeCenterX;
              data[index].nodeCenterY = (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degrees)) + data[parent(index)].nodeCenterY;
            }

            elem = (
              <g>
                <TreeNode
                  coordinates={{
                    x: data[index].nodeCenterX,
                    y: data[index].nodeCenterY
                  }}
                  radius={nodeRadius}
                  value={item.val}
                />
              </g>
            )

            return elem;
          })
        }
      </svg>
    </div>
  );
}

export default Tree;

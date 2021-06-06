import React, { useEffect, useState } from 'react';
import TreeNode from './TreeNode.js';
import {degreesToRadians} from '../utils/helpers';
var Queue = require('queue-fifo');

const nodeRadius = 50;
let edgeLength = nodeRadius + 150;

const Tree = (props) => {
  const treeType = props.type;
  let nodeCenterX = 750;
  let nodeCenterY = 60;
  let degreesLeft = 165;
  let degreesRight = 15;
  let depthIndex = -1;
  let prevDepth = 0;
  let newDepth = false;
  const [data, setData] = useState([]);
  let queue = new Queue();

  /* let tree = {
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
  };*/

  let tree = {
    val: 15,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: null,
  };

  const generateTree = (root, parent, level) => {
    if (root === null) {
      return;
    }

    queue.enqueue(root);

    let node = queue.dequeue();

    let obj = {};


    if (parent === null) {
      obj = {
        val: node.val,
        nodeCenterX: nodeCenterX,
        nodeCenterY: nodeCenterY,
      };

      node.nodeCenterX = nodeCenterX;
      node.nodeCenterY = nodeCenterY;
    } else {
      let degrees;

      //if (depthIndex % 2 === 0) {
        degrees = degreesLeft;
      //} else {
        //degrees = degreesRight;
      //}

      obj = {
        val: node.val,
        nodeCenterX: (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degrees)) + parent.nodeCenterX,
        nodeCenterY: (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degrees)) + parent.nodeCenterY,
      };

      node.nodeCenterX = (edgeLength + nodeRadius) * Math.cos(degreesToRadians(degrees)) + parent.nodeCenterX;
      node.nodeCenterY = (edgeLength + nodeRadius) * Math.sin(degreesToRadians(degrees)) + parent.nodeCenterY;
    }


    setData(data => [...data, obj])

    //setTimeout(() => {
      generateTree(node.left, node, level + 1);
      generateTree(node.right, node, level + 1);
    //}, 1000);
  };

  useEffect(() => {
    generateTree(tree, null, 0);
  }, []);

  if (treeType !== 'bst') {
    return null;
  }

  return (
    <div className="flex justify-center">
      <svg height="2000" width="100%">
        {
          data.map((item) => {
            console.log(item.val)
            return (
              <TreeNode
                coordinates={{
                  x: item.nodeCenterX,
                  y: item.nodeCenterY
                }}
                radius={nodeRadius}
                value={item.val}
              />
            )
          })
        }
      </svg>
    </div>
  );
}

export default Tree;

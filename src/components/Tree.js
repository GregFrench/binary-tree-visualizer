import React, { useEffect, useState } from 'react';
import TreeNode from './TreeNode.js';
import {degreesToRadians} from '../utils/helpers';
import {tree} from '../utils';

var Queue = require('queue-fifo');

const Tree = (props) => {
  const treeType = props.type;
  const [data, setData] = useState([]);
  let queue = new Queue();

  let treeObj = {
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

  const generateTree = (root, parent, level, direction = 'left') => {
    if (root === null) {
      return;
    }

    queue.enqueue(root);

    let node = queue.dequeue();
    let obj = {};

    if (parent === null) {
      obj = {
        val: node.val,
        nodeCenterX: tree.nodeCenterX,
        nodeCenterY: tree.nodeCenterY,
      };

      node.nodeCenterX = tree.nodeCenterX;
      node.nodeCenterY = tree.nodeCenterY;
    } else {
      let degrees;
      let degreesLeft = tree.degreesLeft;
      let degreesRight = tree.degreesRight;

      if (level !== 0 && level % 2 === 0) {
        degreesLeft -= 20;
        degreesRight += 20;
      }

      if (direction === 'left') {
        degrees = degreesLeft;
      } else {
        degrees = degreesRight;
      }

      obj = {
        val: node.val,
        nodeCenterX: (tree.edgeLength + tree.nodeRadius) * Math.cos(degreesToRadians(degrees)) + parent.nodeCenterX,
        nodeCenterY: (tree.edgeLength + tree.nodeRadius) * Math.sin(degreesToRadians(degrees)) + parent.nodeCenterY,
      };

      node.nodeCenterX = (tree.edgeLength + tree.nodeRadius) * Math.cos(degreesToRadians(degrees)) + parent.nodeCenterX;
      node.nodeCenterY = (tree.edgeLength + tree.nodeRadius) * Math.sin(degreesToRadians(degrees)) + parent.nodeCenterY;
    }

    setData(data => [...data, obj])

    setTimeout(() => {
      generateTree(node.left, node, level + 1, 'left');
      generateTree(node.right, node, level + 1, 'right');
    }, 1000);
  };

  useEffect(() => {
    setData([]);
    generateTree(treeObj, null, 0);
  }, [treeType]);

  if (treeType !== 'bst') {
    return null;
  }

  return (
    <div className="flex justify-center">
      <svg height="2000" width="100%">
        {
          data.map((item) => (
            <TreeNode
              coordinates={{
                x: item.nodeCenterX,
                y: item.nodeCenterY
              }}
              radius={tree.nodeRadius}
              value={item.val}
            />
          ))
        }
      </svg>
    </div>
  );
}

export default Tree;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
      if (!root) return 0;
  let height = 0;
  let q = [root];

  while (q.length) {
    const node = q.shift();
    height++;

    const left = node.left;
    const right = node.right;

    if (!left && !right) return height;
    else {
      if (left) q.push(left);
      if (right) q.push(right);
    }
  }
};
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
 const convertIntoString = (r) => {
    if (r) {
      let str =  "," + r.val;
      str += convertIntoString(r.left);
      str += convertIntoString(r.right);

      return str;
    } else {
        return "null,"
    }
  };
    const rootStr = convertIntoString(root);
    const subRootStr = convertIntoString(subRoot);
    return rootStr.includes(subRootStr);
};
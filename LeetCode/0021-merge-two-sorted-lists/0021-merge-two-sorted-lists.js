/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-101);
  let tmp = dummy;
  let cur1 = list1;
  let cur2 = list2;

  while (cur1 && cur2) {
    if (cur1.val < cur2.val) {
      tmp.next = cur1;
      cur1 = cur1.next;
    } else {
      tmp.next = cur2;
      cur2 = cur2.next;
    }
    tmp = tmp.next;
  }

  tmp.next = cur1 ? cur1 : cur2;

  return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let tmp = dummy;
  let cur1 = l1;
  let cur2 = l2;
  let isTwoDigits = false;

  while (cur1 && cur2) {
    let sum = cur1.val + cur2.val;

    if (isTwoDigits) {
      sum += 1;
      isTwoDigits = false;
    }

    if (sum > 9) {
      sum -= 10;
      isTwoDigits = true;
    }

    tmp.next = new ListNode(sum);
    tmp = tmp.next;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  let remaining = cur1 ? cur1 : cur2;
  while (remaining) {
    let sum = remaining.val;

    if (isTwoDigits) {
      sum += 1;
      isTwoDigits = false;
    }

    if (sum > 9) {
      sum -= 10;
      isTwoDigits = true;
    }

    tmp.next = new ListNode(sum);
    tmp = tmp.next;
    remaining = remaining.next;
  }

  if (isTwoDigits)
      tmp.next = new ListNode(1);

  return dummy.next;
};
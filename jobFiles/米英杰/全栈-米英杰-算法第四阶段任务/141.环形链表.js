/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    let cur = head
    let p = head.next
    while (p !== null && p.next !== null) {
        if (p === cur) {
            return true
        }
        cur = cur.next
        p = p.next.next
    }
    return false
};
// @lc code=end


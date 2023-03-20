/*
https://leetcode.com/problems/linked-list-cycle-ii/

To do this, iterate through nodes and if any node is encountered twice then return true,
To store the node, use JS set.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const detectCycle = function(head) {
     let current = head, visited = new Set();
     while (current !== null) {
         if (visited.has(current)) {
             return current;
         }
         visited.add(current);
         current = current.next;
     }
     return null;
};


/**
 * This algo is to move two pointers from head at x and 2x speed. So hare will move two node at a time and tortoise will move 
 * one node at a time. If they meet means cycle is there, or else cycle is not there.
 * They will not meet where the cycle is found. To get the point where they meet, traverse backwards from the meeting point and
 * traverse forward from head. The  point where these 2 pointers meet is the point where cycle originated.
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycleUsingFloydAndHareAlgo = function (head) {
    if (!head || !head.next) {
        return null;
     }
     let tor = head, hare = head, found = null;
    while (true) {
         
        if (tor && tor.next) {
            tor = tor.next
        } else {
            return null;
        }
        if (hare && hare.next && hare.next.next) {
            hare = hare.next.next;
        } else {
            return null;
        }       
         if (tor === hare) {          
             break;
        }
       
     }
     if (tor) {
         let toReturn = head;
         while (toReturn !== null) {             
             if (toReturn === tor) {
                 return toReturn;
             }
             toReturn = toReturn.next;
             tor = tor.next;
         }
     } else {
        return null;
     }
   
};


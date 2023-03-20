/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------

const findCycle = function(head) {
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

console.log(findCycle(linkedList));
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    /*
        1. travel through recursive list and make it to the last
    */
    let prev = null;
    let next = null;

    while(head){
        next = head.next;
        console.log(' -- next ' , next);
        head.next = prev;
        console.log(' -- head.next ' , head.next);
        prev = head;
        console.log(' -- prev ' , prev);
        head = next;
        console.log(' -- head ' , head);
        
        console.log('-----------------------------')
        
        
    }
    //console.log('-- prev is ' , prev);
};
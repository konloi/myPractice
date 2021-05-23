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
 var addTwoNumbers = function(l1, l2) {
    /*
    1. set pointer to each first list , 
    2. add values of each index , if added value > 10  ; addvalue = addedvalue%10; carryFlag = true ; 
    3. array[i] = addedvalue;
    4. reverse array and create new Listnode
    
    */
   let a = new Array();
   let carry = false;
   let head = new ListNode(0);
   let newList = head;
   
   while( l1 != null || l2 != null){
       let sum = 0
       if(l1==null){
            sum += l2.val;
             l2 = l2.next;
       }else if(l2==null){
            sum += l1.val;
            l1 = l1.next;
       }else{
           sum = l1.val+l2.val;
           l1 = l1.next;
           l2 = l2.next;
       }
           
       if(carry){
           sum += 1;
       }
           
           if(sum>=10){
               sum = sum%10;
               carry = true;
           }else{
               carry = false;
           }
       
       newList.next = new ListNode(sum);
       newList = newList.next;
   }
   if(carry){
        newList.next = new ListNode(1);
        newList = newList.next;
   }
   
   return head.next;
};
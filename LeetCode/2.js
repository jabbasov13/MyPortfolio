// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
// var addTwoNumbers = function(l1, l2) {
//     l1 = [2,4,3], l2 = [5,6,4]
//     let arr=[];
//     let l3 =parseInt((l1.reverse()).join(''))+parseInt((l2.reverse()).join(''));

//     while(l3>=1){
//         arr.push(l3%10);
//         l3=parseInt(l3/10);
//     }
//     return arr
// };

// console.log(addTwoNumbers())

var addTwoNumbers = function(l1, l2) {
    l1 = [2,4,3], l2 = [5,6,4]
    let arr=[];
    
    
    for(let i=0;i<l1.length;i++){
        l1[i]+l2[i]
    }




};

console.log(addTwoNumbers())
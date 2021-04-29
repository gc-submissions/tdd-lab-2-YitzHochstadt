
class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  let a = new ListNode("A");
  let b = new ListNode("B");
  let c = new ListNode("C");
  let head = a;
  a.next = b;
  b.next = c;
  
  function printList() {
    // TODO 1
    let str = "";
    let currentNode = head;
    while (currentNode !== null){
      str += currentNode.value + " ";
      currentNode = currentNode.next
    }
    console.log(str)
  }
  printList();
  
  // add to the beginning "M"
  head = new ListNode("M", head);
  printList();
  // add to the end "Z"
  c.next = new ListNode("Z");
  printList();
  // remove from the beginning
  head = a;
  printList();
  // add to the middle "X"
  b.next = new ListNode("X", c);
  printList();
  // bonus: remove from end
  
  // bonus: remove from middle
  
  // bonus: do these as reusable functions... don't use any of the letter variable, just use head.
  function addToBeginning(value) {
  
  }
  function removeFromBeginning() {
  
  }
  function addToEnd(value) {
    // hint: must loop to find the end
  }
  function removeFromEnd() {
    // hint: must loop to find the end
  }
  
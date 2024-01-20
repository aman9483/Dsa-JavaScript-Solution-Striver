// Problem Statement: For a given Singly LinkedList, insert a node at the beginning of the linked list.

class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

function printList(head) {
    let curr = head;
    while (curr !== null) {
        process.stdout.write(curr.val + "-->");
        curr = curr.next;
    }
    console.log("null");
}

function insertAtFirst(value, head) {
    // Step 1: Creating a new Node with the given val
    const newNode = new ListNode(value);

    // Step 2: Making the next of the newly created Node point to the current head of the LinkedList
    newNode.next = head;

    // Making the newly created Node the new head
    head = newNode;
    return head;
}

// Main function
let head = null; // Head of the LinkedList
head = insertAtFirst(40, head);
head = insertAtFirst(30, head);
head = insertAtFirst(20, head);
head = insertAtFirst(10, head);
console.log("LinkedList before inserting 0 at the beginning:");
printList(head);
head = insertAtFirst(0, head);
console.log("LinkedList after inserting 0 at the beginning:");
printList(head);

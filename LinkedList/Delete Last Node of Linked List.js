class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

// Function to delete the tail of the linked list
function deleteTail(head) {
    // Check if the linked list is empty or has only one node
    if (head === null || head.next === null) {
        return null;
    }

    // Create a temporary pointer for traversal
    let temp = head;

    // Traverse the list until the second-to-last node
    while (temp.next.next !== null) {
        temp = temp.next;
    }

    // Nullify the connection from the second-to-last node to delete the last node
    temp.next = null;

    // Return the updated head of the linked list
    return head;
}

// Function to print the linked list
function printLL(head) {
    while (head !== null) {
        console.log(head.data + " ");
        head = head.next;
    }
}

// Main function
function main() {
    // Initialize an array with integer values
    const arr = [2, 5, 8, 7];

    // Create the linked list with nodes initialized with array values
    let head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);
    head.next.next.next = new Node(arr[3]);

    // Delete the tail of the linked list
    head = deleteTail(head);

    // Print the modified linked list
    printLL(head);
}

// Call the main function
main();

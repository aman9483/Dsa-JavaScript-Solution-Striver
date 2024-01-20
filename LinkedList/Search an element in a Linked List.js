class Node {
    constructor(data1, next1 = null) {
        this.data = data1;
        this.next = next1;
    }
}

// Function to check if a given element is present in the linked list
function checkIfPresent(head, desiredElement) {
    let temp = head;

    // Traverse the linked list
    while (temp !== null) {
        // Check if the current node's data is equal to the desired element
        if (temp.data === desiredElement) {
            return 1; // Return 1 if the element is found
        }

        // Move to the next node
        temp = temp.next;
    }

    return 0; // Return 0 if the element is not found in the linked list
}

// Main function
function main() {
    // Create a linked list: 1 -> 2 -> 3
    const arr = [1, 2, 3];
    const head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);

    const val = 3; // Element to be checked for presence in the linked list

    // Call the checkIfPresent function and print the result
    console.log(checkIfPresent(head, val));
}

// Execute the main function
main();
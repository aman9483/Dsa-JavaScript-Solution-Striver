// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

function rotate(matrix) {
    const n = matrix.length;
    const rotated = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }

    return rotated;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            process.stdout.write(matrix[i][j] + " ");
        }
        console.log();
    }
}

// Main function
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotated = rotate(arr);

console.log("Rotated Image");
printMatrix(rotated);

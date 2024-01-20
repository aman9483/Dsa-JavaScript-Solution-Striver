// problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k

function findAllSubarraysWithGivenSum(arr, k) {
    const n = arr.length; // size of the given array.
    let cnt = 0; // Number of subarrays:

    for (let i = 0; i < n; i++) { // starting index i
        for (let j = i; j < n; j++) { // ending index j

            // calculate the sum of subarray [i...j]
            let sum = 0;
            for (let K = i; K <= j; K++)
                sum += arr[K];

            // Increase the count if sum == k:
            if (sum === k)
                cnt++;
        }
    }
    return cnt;
}

const arr = [3, 1, 2, 4];
const k = 6;
const cnt = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is:", cnt);

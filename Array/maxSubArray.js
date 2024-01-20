// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

function maxSubarraySum(arr, n) { //time->O(N*N*N)

    var maxi = Number.MIN_SAFE_INTEGER

    for(var i =0; i<n; i++){


        for(var j = i; j<n; j++){

            var sum = 0;

            for(var k = i; k<=j; k++){

                sum+=arr[k];
            }

            maxi = Math.max(maxi, sum)
        }
    }

    return maxi;

}

const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];

const n = arr.length;

const output = maxSubarraySum(arr, n);

console.log(`the max sub array is : ${output}`);
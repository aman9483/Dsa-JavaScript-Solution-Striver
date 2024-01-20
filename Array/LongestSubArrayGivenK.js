function LongestSubArray(arr,k){

    let n = arr.length;

    var len = 0;

    for(var i =0; i<n; i++){

        for(var j = i; j<n; j++){

            var sum = 0;

            for (let k = i; k <= j; k++) {
            
                sum+=arr[k];
            }

            
        }

       

        if(sum===k){

            len = Math.max(len, j-i+1);
        }
    }

    return len;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = LongestSubArray(a, k);
console.log("The length of the longest subarray is:", len);
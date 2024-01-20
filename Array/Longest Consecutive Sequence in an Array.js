// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

function LinearSearch(arr, num){//O(N*N)

    let n = arr.length;


    for(var i = 0; i<n; i++){

          if(arr[i]===num)

              return true;

    }

    return false;

}

function longestSuccessiveElements(arr) {
    let n = arr.length; 
    let longest = 1;

    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let cnt = 1;

    while(LinearSearch(arr, x + 1)===true){

        x+=1;

        cnt+=1;
    }

    longest = Math.max(longest, cnt);

}

return longest;

}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);

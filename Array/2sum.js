function sum2Checker(arr, n, target){//time complexity O(N*N)

    for(var i = 0; i<n; i++){

        for(var j = 1; j<=n; j++){

            if(arr[i]+arr[j]===target){

                return "YES";
            }
        }
    }

    return [-1,-1];
       
}

var arr = [2,6,5,8,11];

var n  = 5;

var target = 14;

var output = sum2Checker(arr,n,target);

console.log(output);
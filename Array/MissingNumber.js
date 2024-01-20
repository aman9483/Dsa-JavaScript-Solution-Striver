function MissingNumber(arr, n){

    for(var i = 1; i<=n; i++){

        var flag = 0;

        for(var j = 0; j<n-1; j++){

            if(arr[j]==i){


                flag = 1;

                break;
            }
        }

        if(flag===0){

            return i;
        }
    }

    return -1;
}

const N = 5;
const a = [1, 2, 4, 5];
const ans = MissingNumber(a, N);
console.log("The missing number is:", ans);

//think for Optimal solution later on;

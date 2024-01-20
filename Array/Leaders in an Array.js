// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

function Leaders_in_an_Array(arr, n){//O(N*N)

    var leaders = [];

   
    for(var i = 0; i<n; i++){

        var isLeader = true;


        for(var j = i+1; j<n; j++){

             if(arr[i]<=arr[j]){

                isLeader = false;

                break;
             }
        }

        if(isLeader){

            leaders.push(arr[i]);
        }
    }

    return leaders;
}

var arr = [4, 7, 1, 0];

var n = arr.length;

var output = Leaders_in_an_Array(arr, n);

console.log(output);
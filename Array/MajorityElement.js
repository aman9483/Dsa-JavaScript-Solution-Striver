// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

function MajorityElement(arr,n){//O(N)+O(N)

      var count = 0;

      for(var i = 0; i<n; i++){

        for(var j = 0; j<n; j++){

            if(arr[j]===arr[i]){

                count++;
            }
        }

        if(count>(n/2)){


            return arr[i];
          }
      }

      return -1;

     
}

var arr = [3,2,3];

var n = 7;

var output = MajorityElement(arr, n);

console.log(output);
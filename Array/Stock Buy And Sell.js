// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

function StockBySell(arr, n){//O(N*N) 

    var maxProfit = 0;

      for(var i = 0; i<n; i++){

          for(var j = i + 1; j<n;  j++){


              if(arr[j]>arr[i]){

                  maxProfit = Math.max(arr[j]-arr[i], maxProfit);

                  
              }
          }
      }

      return maxProfit;
}

var arr = [7,1,5,3,6,4];//O(N)

var output = StockBySell(arr, 6);

console.log(output);


function StockBySellOptimal(arr, n){


    var maxProfit = 0;

    var minPrice = Number.MAX_SAFE_INTEGER;

      for(var i = 0; i<n; i++){

        
            minPrice = Math.min(minPrice, arr[i]);

            maxProfit = max(maxProfit, arr[i]-minPrice);
          
      }

      return maxProfit;

}


var arr = [7,1,5,3,6,4];

var output = StockBySell(arr, 6);

console.log(output);



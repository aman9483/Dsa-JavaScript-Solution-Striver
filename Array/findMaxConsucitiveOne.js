function FindMaxConsucativeOne(arr, n){

      var count = 0;

      var max_Count = 0;

      for(var i = 0; i<n; i++){

          if(arr[i]===1){

            count++;

            max_Count = Math.max(max_Count, count);

    
          }

         else{


            count = 0;
         }
      }

     

      return max_Count;

}

var arr = [1, 1,1,1, 0, 1, 1, 1];

var n = 8;

var Output = FindMaxConsucativeOne(arr, n);

console.log(Output);
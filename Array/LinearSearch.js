function LinearSearch(arr, key){

     var n = arr.length;

    for(var i = 0; i<n; i++){

         if(arr[i]===key){

              return true;
         }
    }

    return false;

}

var arr = [1,2,3,4,5,6,7];



var key = 5;

var Output = LinearSearch(arr, key);

console.log(Output);
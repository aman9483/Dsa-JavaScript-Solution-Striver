function LeftRotateArrayBy1(arr){

    var n = arr.length;

    var temp = arr[0];

     for(var i =1; i<n; i++){

          arr[i-1] = arr[i];
     }

     arr[n-1] = temp;

     return arr;

}

var arr = [1, 2, 3, 4, 5, 6,4];
var result = LeftRotateArrayBy1(arr);
console.log(result);
function checkSortedElement(arr){

      for(var i = 1; i<arr.length; i++){

          if(arr[i]<arr[i-1]){

                return false;
          }

          
      }

      return true
}

var arr = [1,2,3,4,5,6,7]

var result = checkSortedElement(arr);

console.log(result);
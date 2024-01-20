function SortArray(arr, n){//Dutch National Flag algorithm O(N)

     var low = 0;

     var mid = 0;

     var high = n-1;

     while(mid<=high){

        if(arr[mid]===0){

            var temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            low++;

            mid++;
        }

        else if(arr[mid]===1){

            mid++;
        }

        else{

            var temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;

            high--;
        }
     }

}

var arr  = [2,0,2,1,1,0];

var n = 6;

SortArray(arr, n)

console.log(arr);
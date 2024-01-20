function Reverse(arr, start, end){

    while(start<=end){

        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;

        end--;
    }
}

function LeftRotateArrayBy1(arr, n, k){

    Reverse(arr, 0, k-1);//reverse first k element
    Reverse(arr, k, n-1);//reverse last n-k element
    Reverse(arr, 0, n-1);//reverse whole array

}

var arr = [1,2,3,4,5,6,7];

var n = 7;

var k = 2;

LeftRotateArrayBy1(arr, n, k)

console.log('After rotating k elements to left');

for(var i = 0; i<n; i++)

     console.log(arr[i]);


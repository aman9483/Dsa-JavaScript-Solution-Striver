// Variety-1

// Problem Statement:

// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// Note: Start the array with positive elements.

function RearrangebySign(A, n) {

    var pos = [];

    var neg = [];

    for(var i = 0; i<n; i++){

          if(A[i]>0){

               pos.push(A[i]);
          }

          else{

               neg.push(A[i]);
          }
    }


    for(var i = 0; i<n/2; i++){

        A[2 * i] = pos[i];

        A[2* i + 1] = neg[i];
    }

    return A;


}

let A = [1, 2, -4, -5];

var n = A.length;

var output = RearrangebySign(A, n);

console.log(output);
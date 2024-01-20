function MoveAllNonZeroToEnd(a, n){//time -- O(2n) space - O(N)


      var temp = [];

      for(var i =0; i<n; i++){

        if(a[i]!=0){

          temp.push(a[i]);

        }
      }

      var Count = temp.length;

      for(var i = 0; i<Count; i++){

           a[i] = temp[i];
      }

      for(var i = Count; i<n; i++){

          a[i] = 0;
      }

      return a;
}

var arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

var n = 10;


var Output = MoveAllNonZeroToEnd(arr, n);

console.log(Output.join(' '));


//optimal approch

function MoveAllNonZero(a, n){//time -- O(N) space - O(1)

    var j = -1;

    for(var i = 0; i<n; i++){

         if(a[i]===0){

              j = i;

              break;
         }
    }

    if(j==-1) return a;

    for(var i = j + 1; i<n; i++){

        if(a[i]!==0){

            [a[i], a[j]= a[j], a[i]]; 

            j++;
        }
    }

    return a;

}

var arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

var n = 10;


var Output = MoveAllNonZeroToEnd(arr, n);

console.log(Output.join(' '));
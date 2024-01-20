function FindOccourance(arr){

     var n = arr.length;

     for(var i = 0; i<n; i++){

          var num = arr[i];

          var count = 0;


          for(var j = 0; j<n; j++){


               if(arr[j]===num){

                  count++;


               }
          }

          if(count===1){

              return num;
          }
     }

     return -1;
}

const arr = [4, 1, 2, 1, 2];
  const ans = FindOccourance(arr);
  console.log("The single element is:", ans);
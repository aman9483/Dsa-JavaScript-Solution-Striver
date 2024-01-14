function SecondSmallest(arr){

    if(arr.length<1){

        return -1;
    }

    var small = Infinity;

    var Second_Smallest = Infinity;

    for(var i =0; i<arr.length; i++){

          if(arr[i]<small){

              Second_Smallest = small;

              small = arr[i];
          }

          else if(arr[i]<Second_Smallest && arr[i]!==small){

            Second_Smallest = arr[i];
          }
    }

    return Second_Smallest;
}

function secondLargest(arr) {
    if (arr.length < 2)
      return -1;
  
    let large = -Infinity;
    let second_large = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > large) {
        second_large = large;
        large = arr[i];
      } else if (arr[i] > second_large && arr[i] !== large) {
        second_large = arr[i];
      }
    }
  
    return second_large;
  }
  
  const arr = [1, 2, 4, 7, 7, 5];
  const sS = SecondSmallest(arr);
  const sL = secondLargest(arr);
  
  console.log("Second smallest is " + sS);
  console.log("Second largest is " + sL);
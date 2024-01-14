let element = [2,5,1,10,0];

function FindLargestElement(){

let LargestElement = element[0];

for(var i = 0; i<element.length; i++){

      if(LargestElement<element[i]){

          LargestElement = element[i];
      }
}

console.log(`THE LARGEST ELEMENT IS : ${LargestElement}`);

}

FindLargestElement();


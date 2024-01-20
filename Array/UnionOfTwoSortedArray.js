function UnionOfSortedArray(arr1, arr2) {
    let maps = new Map();
    let union = [];

    // Count occurrences in arr1
    for (let num of arr1) {
        maps.set(num, (maps.get(num) || 0) + 1);
    }

    // Count occurrences in arr2 and update the map
    for (let num of arr2) {
        maps.set(num, (maps.get(num) || 0) + 1);
    }

    // Push numbers into the union array based on the map
    for (let [num, count] of maps) {
        union.push(num);
    }

    return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let unions = UnionOfSortedArray(arr1, arr2);

console.log(unions.join(" "));



function findUnion(arr1, arr2) {
    let i = 0, j = 0; // Pointers
    let union = []; // Union array
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) { // Case 1 and 2
        if (union.length === 0 || union[union.length - 1] !== arr1[i])
          union.push(arr1[i]);
        i++;
      } else { // Case 3
        if (union.length === 0 || union[union.length - 1] !== arr2[j])
          union.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) { // If any elements left in arr1
      if (union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) { // If any elements left in arr2
      if (union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  
    return union;
  }
  
  const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr4 = [2, 3, 4, 4, 5, 11, 12];
  
  const union = findUnion(arr3, arr4);
  
  console.log("Union of arr1 and arr2 is:");
  console.log(union.join(" "));

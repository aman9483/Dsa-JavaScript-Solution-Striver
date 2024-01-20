function removeDuplicate(arr) {
    var i = 0;

    for (var j = 1; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }

    return i + 1;
}

var arr = [1, 2, 3, 4, 5, 6,4];
var result = removeDuplicate(arr);
console.log(result);

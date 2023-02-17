function reverse(arr) {
    var arrayReversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrayReversed.push(arr[i]);
    }
    return arrayReversed;
}

var arr = ["a", "b", "c", "d", "e"];
console.log(reverse(arr));
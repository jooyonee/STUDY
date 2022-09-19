var answer = '';

var s = "-1 -2 -3 -4";

var arr = s.split(' ').map(function(item) {
    return parseInt(item);
});
console.log(arr);

var min = arr[0];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
        max = arr[i];
    }
}

answer = min + ' ' + max;

console.log(answer);

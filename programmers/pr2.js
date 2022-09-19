sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]

var i = 0;
while ( i < sizes.length ) {
    if (sizes[i][0] < sizes[i][1]) {
        var tmp = sizes[i][1];
        sizes[i][1] = sizes[i][0];
        sizes[i][0] = tmp;
    }
    i++;
}

console.log(sizes);

// 가로의 최댓값 찾기
var w_max = sizes[0][0];
for (var i=0; i < sizes.length; i++) {
    if (sizes[i][0] > w_max) {
        w_max = sizes[i][0];
    }
} 
console.log(w_max);

// 세로의 최댓값 찾기
var h_max = sizes[0][1];
for (var j=0; j < sizes.length; j++) {
    if (sizes[j][1] > h_max) {
        h_max = sizes[j][1];
    }
} 
console.log(h_max);

answer = w_max * h_max;

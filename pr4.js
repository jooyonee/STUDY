var answer = '';

var str_array = ['수', '박'];


var i = 0;
while ( i < n ) {
    
    if (i % 2 === 0) {
        answer += str_array[0];
    } 
    
    else {
        answer += str_array[1];
    }
    i++;
}

console.log(answer);

var src = "111100100011";

var arr = Array.from(src);
console.log(arr);

var temp = arr[0];

var answer0 = [];

var count = 1;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
        count += 1;
    } else {
        console.log(count);
        answer0.push(count);        
        console.log(arr[i] + count);

        count = 1;
    }
}

console.log(answer0);

for (var i = 0; i < answer0.length; i++) {
    if (answer0[i] === 1) {
        answer0[i] = 'A';
    }if (answer0[i] === 2) {
        answer0[i] = 'B';
    }if (answer0[i] === 3) {
        answer0[i] = 'C';
    }if (answer0[i] === 4) {
        answer0[i] = 'D';
    }if (answer0[i] === 5) {
        answer0[i] = 'E';
    }if (answer0[i] === 6) {
        answer0[i] = 'F';
    }if (answer0[i] === 7) {
        answer0[i] = 'G';
    }if (answer0[i] === 8) {
        answer0[i] = 'H';
    }if (answer0[i] === 9) {
        answer0[i] = 'I';
    }if (answer0[i] === 10) {
        answer0[i] = 'J';
    }if (answer0[i] === 11) {
        answer0[i] = 'K';
    }if (answer0[i] === 12) {
        answer0[i] = 'L';
    }if (answer0[i] === 13) {
        answer0[i] = 'M';
    }if (answer0[i] === 14) {
        answer0[i] = 'N';
    }if (answer0[i] === 15) {
        answer0[i] = 'O';
    }if (answer0[i] === 16) {
        answer0[i] = 'P';
    }if (answer0[i] === 17) {
        answer0[i] = 'Q';
    }if (answer0[i] === 18) {
        answer0[i] = 'R';
    }if (answer0[i] === 19) {
        answer0[i] = 'S';
    }if (answer0[i] === 20) {
        answer0[i] = 'T';
    }if (answer0[i] === 21) {
        answer0[i] = 'U';
    }if (answer0[i] === 22) {
        answer0[i] = 'V';
    }if (answer0[i] === 23) {
        answer0[i] = 'W';
    }if (answer0[i] === 24) {
        answer0[i] = 'X';
    }if (answer0[i] === 25) {
        answer0[i] = 'Y';
    }if (answer0[i] === 26) {
        answer0[i] = 'Z';
    }
}



var answer1 = answer0.join('');

console.log(temp + answer1);



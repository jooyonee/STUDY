// 별찍기 연습

var n = 9;

//1
// for (var i = 0; i < n+1; i++) {
//     for (var j = 0; j < i+1; j++) {
//         process.stdout.write('*');
//     }
//     console.log('');
// }


//2
// for (var i = 0; i < n+1; i++) {
//     console.log('*'.repeat(i+1));
// }


//3
// for (var i = n / 2; i > 0; i--) {
//     console.log('*'.repeat(2 * i));
// }


//4
for (var i = 0; i < n/2; i ++) {
    console.log(' '.repeat(i) + '*'.repeat(n-i*2) + ' '.repeat(i));
}
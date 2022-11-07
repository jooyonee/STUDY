//제로초_구구단

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num1 = Math.ceil(Math.random()*9 +1);
let num2 = Math.ceil(Math.random()*9 +1);
console.log(num1, '*', num2, '= ?');

rl.on("line", (line) => {
    var condi = true;
    while(condi) {
        if(parseInt(num1 * num2) === parseInt(line)) {
            console.log("정답입니다.");
            condi = false;
        } else {
            console.log("틀렸음ㅎ");
        }
    }
    rl.close();
});

 
rl.on('close', () => {
        process.exit();
})

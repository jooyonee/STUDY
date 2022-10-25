//구구단

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num1 = Math.floor(Math.random()*9 +1);
let num2 = Math.floor(Math.random()*9 +1);
console.log(num1, '*', num2, '= ?');

rl.on("line", (line) => {
    if(parseInt(num1 * num2) === parseInt(line)) {
        console.log("정답입니다."); 
    } else {
        console.log("웅앵웅");

    }
    
    rl.close();
});
 
rl.on('close', () => {
        process.exit();
})

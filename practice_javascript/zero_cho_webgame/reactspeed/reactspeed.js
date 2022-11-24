const display = document.querySelector('#display');
const result = document.querySelector('#result');

display.textContent = '클릭해서 시작하세요';

//JS에서 HTML class 가져오기!
//className 쓰면 여러 class 그냥 하나의 문자열로 나옴.
//classList 객체를 써주면 된다! -> display.classList.

const random_num = Math.floor(Math.random()* 1000 + 2000);
console.log(random_num);


// let flag = true;
// const clickBtn = () => {
//     if(flag) {
//         display.style.backgroundColor = 'red';
//         flag = false;

//         setTimeout(() => {
//             display.style.backgroundColor = 'green';
//             flag = 'on';
//         }, random_num * 1000);
//     }
//     else {
//         alert('성급함ㅎ');
//     }
    
// }
// btn.addEventListener('click', clickBtn);
 
let startTime;
let endTime;
let records = [];

let count = 0;
display.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('waiting')) {
        display.classList.remove('waiting');
        display.classList.add('ready');
        display.textContent = '초록색이 되면 클릭하세요';
        setTimeout(function () {
            display.classList.remove('ready');
            display.classList.add('go');
            display.textContent = '지금이야!';
            startTime = new Date();
        }, random_num);
    }
    else if (event.target.classList.contains('ready')) {
        console.log('성급합니다 ㅡㅡ');
    }
    else if (event.target.classList.contains('go')) {
        endTime = new Date();
        const diff = endTime - startTime;
        records.push(diff);
        count++;
        display.classList.remove('go');
        display.classList.add('waiting');
        display.textContent = '초록색이 되면 클릭하세요';
    }

    const average = records.reduce((a,c) => a + c / records.length);
    
    if (count === 4) {
        result.textContent = `반응속도 평균 ${average / 5} 입니다.`;
    }
});


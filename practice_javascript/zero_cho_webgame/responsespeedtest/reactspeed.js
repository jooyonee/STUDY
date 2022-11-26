const display = document.querySelector('#display');
const result = document.querySelector('#result');

display.textContent = '클릭해서 시작하세요';

//JS에서 HTML class 가져오기!
//className 쓰면 여러 class 그냥 하나의 문자열로 나옴.
//classList 객체를 써주면 된다! -> display.classList.

const random_num = Math.floor(Math.random()* 1000 + 2000);
// console.log(random_num);


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
// btn.addEventListener('click', clickBtn);   flag변수 둬서 해보려고 시도했었음!
 
let startTime;
let endTime;
let records = [];
let timer;
let count = 0;
display.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('waiting')) {
        display.classList.remove('waiting');
        display.classList.add('ready');
        display.textContent = '초록색이 되면 클릭하세요';
        timer = setTimeout(function () {
            display.classList.remove('ready');
            display.classList.add('go');
            display.textContent = '지금이야!';
            startTime = new Date();
        }, random_num);
        if (count === 3) {
            count = 0;
            result.textContent = '';
            records = [];
        }
    }
    else if (event.target.classList.contains('ready')) {
        clearTimeout(timer);
        display.classList.remove('ready');
        display.classList.add('waiting');
        display.textContent = '너무 성급합니다!';

    }
    else if (event.target.classList.contains('go')) {
        endTime = new Date();
        const diff = endTime - startTime;
        records.push(diff);
        count++;
        display.classList.remove('go');
        display.classList.add('waiting');
        display.textContent = '클릭해서 시작하세요';
        console.log(records);
    }

    const average = records.reduce((a,c) => { 
        return a + c / records.length });
    const toptwo = records.sort((x, y) => {
        return x - y;
    }).slice(0, 2);
    

    if (count === 3) {
        result.textContent = `반응속도 평균 ${average} 입니다.`;
        toptwo.forEach((top, index) => {
            result.append(document.createElement('br'),
            `${index + 1}위 : ${top}ms`);
        });
    }
});



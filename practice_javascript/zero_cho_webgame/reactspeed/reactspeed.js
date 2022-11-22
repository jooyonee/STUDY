const btn = document.querySelector('button');
const display = document.querySelector('#display');
const result = document.querySelector('#result');

//JS에서 HTML class 가져오기!
//className 쓰면 여러 class 그냥 하나의 문자열로 나옴.
//classList 객체를 써주면 된다!
display.classList.


const random_num = Math.floor(Math.random() * 9);
console.log(random_num);


let flag = true;

const clickBtn = () => {
    if(flag) {
        display.style.backgroundColor = 'red';
        flag = false;

        setTimeout(() => {
            display.style.backgroundColor = 'green';
            flag = 'on';
        }, random_num * 1000);
    }
    



    else {
        alert('성급함ㅎ');
    }
    
}









btn.addEventListener('click', clickBtn);
const btn = document.querySelector('button');
const display = document.querySelector('#display');

const random_num = Math.floor(Math.random() * 9);
console.log(random_num);

let flag = true;

const clickBtn = () => {
    if(flag) {
        display.style.backgroundColor = 'red';

        setTimeout(() => {
            display.style.backgroundColor = 'green';
        }, random_num * 1000);
    
    }
    else {

    }
    
}









btn.addEventListener('click', clickBtn);
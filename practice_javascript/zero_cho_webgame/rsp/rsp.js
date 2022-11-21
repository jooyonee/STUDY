const computer = document.querySelector('#computer');
const score = document.querySelector('#score');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

const IMG_url = './rsp.png';

computer.style.background = `url(${IMG_url}) 0 0`;
computer.style.backgroundSize = 'auto 200px';

const rsp_x = {
    scissors : '0',
    rock : '-220px',
    paper : '-440px',
};


let display = 0;
setInterval(() =>  {
    computer.style.background = `url(${IMG_url}) 0 0`;
    computer.style.backgroundSize = 'auto 200px';
}, 50);
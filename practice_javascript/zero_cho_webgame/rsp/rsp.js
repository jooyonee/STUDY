const computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
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

let hand = 'scissors';
const changeComputerHand = () => {    
        if (hand === 'scissors') {
            hand = 'rock';
        }
        else if (hand === 'rock') {
            hand = 'paper';
        }
        else if (hand === 'paper') {
            hand = 'scissors'
        }
        computer.style.background = `url(${IMG_url}) ${rsp_x[hand]} 0`;
        computer.style.backgroundSize = 'auto 200px';
}


const scoreTable = {
    rock : 0,
    scissors : 1,
    paper : -1,
};

let score = 0;

let intervalId = setInterval(changeComputerHand, 500);


let clickable = true;   // flag변수

const clickBtn = () => {

    if (clickable) {
        clearInterval(intervalId);
        clickable = false;

        const myhand = event.target.textContent === '바위' ? 
        'rock' : event.target.textContent === '가위' ? 
            'scissors' : 'paper';

        console.log(myhand);

        const myscore = scoreTable[myhand];
        const computerscore = scoreTable[hand];
        const diff = myscore - computerscore;

        console.log(myscore, computerscore, diff);
        
        let message;
        if (diff == 0) {
            message = '무승부!';
        }
        else if ([2, -1].includes(diff)) {
            message = '승리!';
            score += 1;
        }
        else if (diff == 1 || diff == -2) {
            message = '패배!';
            score -= 1;
        }

        $score.textContent = `${message} 총 : ${score}점`;

        setTimeout(() => {
            clickable = true;
            intervalId = setInterval(changeComputerHand, 500); //타이머 마다 intervalId가 달라지니까 계속 변수에 저장해줘야 함. (예전 타이머로 지금 타이머를 멈출 수는 없음.)
        }, 1500);  
    }
}

rock.addEventListener('click', clickBtn);
scissors.addEventListener('click', clickBtn);
paper.addEventListener('click', clickBtn);




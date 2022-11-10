var candi = Array(45).fill().map((v, i) => i + 1);

//피셔-예이츠 셔플(전부 랜덤으로 섞기)
const shuffle = [];
while(candi.length > 0) {
    const random_num = Math.floor(Math.random() * candi.length);
    const spliceArray = candi.splice(random_num, 1);
    shuffle.push(spliceArray[0]);
}

const lotto = shuffle.slice(0, 6).sort((a, b) => {
    return a - b;
});
const bonus = shuffle[6];

console.log(lotto);
console.log(bonus);



const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const showBall = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    
    colorize(number, $ball);

    $target.append($ball);
} 



const callback = () => {


for (let i = 0; i < lotto.length; i++) {
    setTimeout(() => {
        showBall(lotto[i], $result);
    }, (i+1)*1000);
}


setTimeout(() => {
    showBall(bonus, $bonus);
}, 7000);

}

//ball 색칠 함수
function colorize(number, $tag) {
    if (number < 10) {
        $tag.style.backgroundColor = 'rgb(237, 116, 111)';
    } else if (number < 20) {
        $tag.style.backgroundColor = 'rgb(171, 79, 181)';
    } else if (number < 30) {
        $tag.style.backgroundColor = 'rgb(215, 154, 40)';
    } else if (number < 40) {
        $tag.style.backgroundColor = 'rgb(58, 103, 192)';
    } else {
        $tag.style.backgroundColor = 'rgb(186, 215, 40)';
    }
};


const $button = document.querySelector('button');


$button.addEventListener('click', callback);

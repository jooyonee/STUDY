const total = 12;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

let shuffled = [];
let colorcopy = colors.concat(colors); //배열복사해서 뒤에 붙여넣기(*2)
let clickable = true;
let clicked = [];
let correct = [];


//  카드 섞는 함수
function shuffle() {   
    for (let i = 0; colorcopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * colorcopy.length);
        shuffled.push(colorcopy.splice(randomIndex, 1)[0]);
    }
}


//  카드 1개 생성 함수
function createCard(i) {
    clickable = false;
    const card = document.createElement('div');
    card.className = 'card';
    const card_inner = document.createElement('div');
    card_inner.className = 'card_inner';
    const card_front = document.createElement('div');
    card_front.className = 'card_front';
    const card_back = document.createElement('div');
    card_back.className = 'card_back';
    card_back.style.backgroundColor = shuffled[i];
    card_inner.appendChild(card_front);
    card_inner.appendChild(card_back);
    card.appendChild(card_inner);

    return card;    
}

const $wrapper = document.querySelector('#wrapper');


// 카드 두 장(한 쌍) 클릭할때마다
function onClickCard() {

    this.classList.toggle('flipped');
    clicked.push(this);  // this = card
    if (clicked.length !== 2) {
        return;  // 2장 선택 안 했으면 대기
    }
    const firstcard = clicked[0].querySelector('.card_back').style.backgroundColor;
    const secondcard = clicked[1].querySelector('.card_back').style.backgroundColor;
    if (firstcard == secondcard) {
        correct.push(clicked[0]);
        correct.push(clicked[1]);
        clicked[0].removeEventListener('click', onClickCard);
        clicked[1].removeEventListener('click', onClickCard);
        clicked = [];
        return;
    }
    clicked[0].classList.remove('flipped');
    clicked[1].classList.remove('flipped');
    clicked = []; // clicked 배열 리셋
}


function startGame() {
    clickable = false;
    shuffle();
    console.log(shuffled);

    for (let i = 0; i < total; i++) {
        const card = createCard(i);
        card.addEventListener('click', onClickCard);
        $wrapper.appendChild(card);
    }

    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });

    setTimeout(() => {
        document.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('flipped');
        });
    }, 5000);
    };


startGame();
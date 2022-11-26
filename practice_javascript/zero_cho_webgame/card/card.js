const total = 12;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let colorcopy = colors.concat(colors);  //배열복사해서 뒤에 붙여넣기(*2)

let shuffled = [];

//  카드 섞는 함수
function shuffle() {   
    for (let i = 0; colorcopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * colorcopy.length);
        shuffled.push(colorcopy.splice(randomIndex, 1)[0]);
    }
}

const $wrapper = document.querySelector('#wrapper');

//  카드 1개 생성 함수
function createCard(i) {
    const card = document.createElement('div');
    card.className = 'card';
    const card_inner = document.createElement('div');
    card_inner.className = 'card_inner';
    const card_front = document.createElement('div');
    card_front.className = 'card_front';
    const card_back = document.createElement('div');
    card_back.className = 'card_back';
    // card_back.style.backgroundColor = shuffled[i];
    $wrapper.appendChild(card);
    card_inner.appendChild(card_front);
    card_inner.appendChild(card_back);
    card.appendChild(card_inner);

    return card;    
}


shuffle();
console.log(shuffled);

for (let i = 0; i < total; i++) {
    const $card = createCard(i);
    $wrapper.appendChild($card);
}
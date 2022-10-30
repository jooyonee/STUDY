//구구단 웹 구현

var body = document.body;

let num1 = Math.ceil(Math.random()*9 +1);
let num2 = Math.ceil(Math.random()*9 +1);

var word = document.createElement('div');
word.textContent = num1, '*', num2, '= ?';
document.body.append(word);

var form_tag = document.createElement('form');
document.body.append(form_tag);

var input_blank = document.createElement('input');
form_tag.append(input_blank);
input_blank.focus();

var input_button = document.createElement('button');
input_button.textContent = '입력';
form_tag.append(input_button);

var conclu = document.createElement('div');
document.body.append(conclu);

form_tag.addEventListener('submit', function (event1) { //익명함수(콜백함수)
    event1.preventDefault();   //페이지 새로고침 안 되도록(엔터를 치면 기본적으로 새로고침 or 다른 페이지로 넘어감)
    
    var condi = true;
    while(condi) {
        if (input_blank.value === parseInt(num1 * num2)) {
            conclu.textContent = '정답입니다.';
        } else {
            conclu.textContent = '틀렸습니다.';
        }
    }

});
//끝말잇기 웹에 구현하기

var body = document.body;


var word = document.createElement('div');  // div 태그 생성_1
word.textContent = '소고기';  //태그 안에 들어가는 글자
document.body.append(word);   //body 태그 안에 div 태그 추가_2

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
    if (word.textContent[word.textContent.length - 1] === input_blank.value[0]) {
        conclu.textContent = '딩동댕';
        word.textContent = input_blank.value;
        input_blank.value = '';
        input_blank.focus();
    } else {
        conclu.textContent = '땡';
        input_blank.value = '';
        input_blank.focus();
    }



});

var end = document.createElement('div');
document.body.append(end);
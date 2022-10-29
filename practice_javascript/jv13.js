//구구단 웹에 구현하기

var body = document.body;

var word = document.createElement('div');  // div 태그 생성_1
word.textContent = '라떼';  //태그 안에 들어가는 글자
document.body.append(word);   //body 태그 안에 div 태그 추가_2


var input_blank = document.createElement('input');
document.body.append(input_blank);

var input_button = document.createElement('button');
input_button.textContent = '입력';
document.body.append(input_button);

var conclu = document.createElement('div');
document.body.append(conclu);

input_button.addEventListener('click', function () { //익명함수(콜백함수)
    if (word.textContent[word.textContent.length - 1] === answer[0]) {
        
    }



});

var end = document.createElement('div');
document.body.append(end);
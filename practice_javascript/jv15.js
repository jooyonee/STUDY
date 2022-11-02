var body = document.body;

let random_num_arr = [];
for (i=0; i<4; i++) {
  var num = Math.ceil(Math.random() * 9);
   if (random_num_arr.indexOf(num) === -1) {
    random_num_arr.push(num);
  } else {
    i--;
  }
}

var conclu = document.createElement('h1');
document.body.append(conclu);

var word = document.createElement('div');
word.textContent = "뭐게요 맞춰봐요  *hint : " + random_num_arr;
document.body.append(word);

console.log(random_num);


var form_tag = document.createElement('form');
document.body.append(form_tag);

console.log(random_num);


var input_blank = document.createElement('input');
form_tag.append(input_blank);
input_blank.type = 'text';
input_blank.manLength = 4;
input_blank.focus();

console.log(random_num);


var input_button = document.createElement('button');
input_button.textContent = 'enter';
form_tag.append(input_button);

console.log(random_num);


form_tag.addEventListener('submit', function (event1) {
    event1.preventDefault();

    // var inputt = document.createElement('div');
    // inputt.textContent = typeof(input_blank.value) + '(' + input_blank.value + ')';
    // document.body.append(inputt);

    console.log(input_blank.value === random_num_arr.join(''));
    
    var inputt = input_blank.value;
    if (inputt === random_num_arr.join('')) {
        conclu.textContent = '맞췄습니다.';
            random_num_arr = [];
            for (i=0; i<4; i++) {
                var num = Math.ceil(Math.random() * 9);
                if (random_num_arr.indexOf(num) === -1) {
                    random_num_arr.push(num);
                } else {
                    i--;
                }
            }
            word.textContent = "뭐게요 맞춰봐요  *hint : " + random_num_arr;
        input_blank.value = '';
        input_blank.focus();
    } else {
        conclu.textContent = '아닙니다. ㅡㅡ';

        var answer = inputt.split('');
        var strike = 0;
        var ball = 0;

        for (var i = 0; i < 4; i++) {
            if (answer[i] === random_num_arr[i]) {
                strike++;
            } else if (random_num_arr.includes(answer[i])) {
                ball++;
            }
        }
        

        
        input_blank.value = '';
        input_blank.focus();
    }

});


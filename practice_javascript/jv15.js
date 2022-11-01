
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
var random_num = random_num_arr.join('');

var conclu = document.createElement('h1');
document.body.append(conclu);

var word = document.createElement('div');
word.textContent = "뭐게요 맞춰봐요 / 답 : " + random_num + ' ' + typeof(random_num);
document.body.append(word);


var form_tag = document.createElement('form');
document.body.append(form_tag);

var input_blank = document.createElement('input');
form_tag.append(input_blank);
input_blank.type = 'text';
input_blank.manLength = 4;
input_blank.focus();

var input_button = document.createElement('button');
input_button.textContent = 'enter';
form_tag.append(input_button);



form_tag.addEventListener('submit', function (event1) {
    event1.preventDefault();

    // var inputt = document.createElement('div');
    // inputt.textContent = typeof(input_blank.value) + '(' + input_blank.value + ')';
    // document.body.append(inputt);

    console.log(input_blank.value === random_num);
    console.log(typeof(input_blank.value));
    console.log(input_blank.value);
    

    if (input_blank.value === random_num) {
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
            var random_num = random_num_arr.join('');
            word.textContent = "뭐게요 맞춰봐요" + random_num;
        input_blank.value = '';
        input_blank.focus();
        condi = false;
    } else {
        conclu.textContent = '아닙니다.';
        input_blank.value = '';
        input_blank.focus();
    }

});


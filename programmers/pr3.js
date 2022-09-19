//프로그래머스 모의고사 Lv.1
var answer = [];
var answers = [1,2,3,4,5,1,5,4,3,3,2,3,4,2,3,4,5,1,2,4,2,4,3,1,4];

var student1_ans = [1, 2, 3, 4, 5];
var student2_ans = [2, 1, 2, 3, 2, 4, 2, 5];
var student3_ans = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

// 학생들의 정답 배열 만들기
// 학생1 
var i = 1;
var j = 0;
var student1 = [];   

while(i <= answers.length) {
    
    if (i % 5 === 1) {
        j = 0;
    }
    student1.push(student1_ans[j]);
    
    j++;
    i++;
}
console.log(student1);

//학생2
var i = 1;
var j = 0;
var student2 = [];   

while(i <= answers.length) {
    
    if (i % 8 === 1) {
        j = 0;
    }
    student2.push(student2_ans[j]);
    
    j++;
    i++;
}
console.log(student2);

//학생3
var i = 1;
var j = 0;
var student3 = [];   

while(i <= answers.length) {
    
    if (i % 10 === 1) {
        j = 0;
    }
    student3.push(student3_ans[j]);
    
    j++;
    i++;
}
console.log(student3);



//각 학생이 맞힌 정답 수 확인
var c1 = 0; // 학생1이 맞힌 정답 수
var c2 = 0; // 학생2가 맞힌 정답 수
var c3 = 0; // 학생3이 맞힌 정답 수

for(var i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i]) {
        c1 += 1;
    }
    if (answers[i] === student2[i]) {
        c2 += 1;
    }
    if (answers[i] === student3[i]) {
        c3 += 1;
    }
}

if (c1 === c2 === c3) {
    answer.push(1, 2, 3);
} else {
    var count_ans = [];
    count_ans.push(c1, c2, c3);

    for (var i = 0; i < count_ans.length; i++) {
        if (count_ans[i] === Math.max(...count_ans)) {
            answer.push( i+1 );
            }
        }

    }

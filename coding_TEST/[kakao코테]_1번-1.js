var today = "2023.01.01";
var terms = ["A 6", "B 10", "C 12"];
var privacies = ["2021.05.02 A", "2022.12.28 B", "2022.12.28 C", "2022.02.20 C"];
var answer = [];



let p_len = privacies.length;


// 오늘날짜 배열
let today_arr = today.split(".");
for(var i=0; i<today_arr.length; i++) {
    today_arr[i] = parseInt(today_arr[i])
}
// console.log(today_arr);


let privacies_arr = [];
for(var i=0; i<p_len; i++) {
    var arr = privacies[i].split(" ");
    privacies_arr.push(arr);
}

for(var i=0; i<p_len; i++) {
    privacies_arr[i][0] = privacies_arr[i][0].split(".");
    privacies_arr[i][0][0] = parseInt(privacies_arr[i][0][0]);
    privacies_arr[i][0][1] = parseInt(privacies_arr[i][0][1]);
    privacies_arr[i][0][2] = parseInt(privacies_arr[i][0][2]);
}
// console.log(privacies_arr);

// 약관 배열
var terms_arr = [];
for (var i = 0; i<terms.length; i++) {
    var arr = terms[i].split(" ");
    terms_arr.push(arr);
}
// console.log(terms_arr);




var i = 0;
 while (i < p_len) {
    for (var j=0; j<terms_arr.length; j++) {
        if(terms_arr[j][0] === privacies_arr[i][1]) {
            privacies_arr[i][0][1] = (privacies_arr[i][0][1] + parseInt(terms_arr[j][1]));
        }
     }
     if (privacies_arr[i][0][1] > 12) {

        privacies_arr[i][0][0] = parseInt(privacies_arr[i][0][0] + parseInt(privacies_arr[i][0][1] / 12));
        privacies_arr[i][0][1] = parseInt(privacies_arr[i][0][1] % 12);
     }
    i++;
}
 
// console.log(privacies_arr);

 


for (var i=0; i<p_len; i++) {
    if (today_arr[0] > privacies_arr[i][0][0]) {
        answer.push(i+1);
    }
    if (today_arr[0] === privacies_arr[i][0][0]) {
        if (today_arr[1] > privacies_arr[i][0][1]) {
            answer.push(i+1)
        }
        if (today_arr[1] === privacies_arr[i][0][1]) {
            if(today_arr[2] >= privacies_arr[i][0][2]) {
                answer.push(i+1);
            }

        }
    }
}


console.log(answer);
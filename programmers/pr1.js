// 프로그래머스 스쿨 짝지어 제거하기 (Lv.1)

function check(s) {
    
    var str = Array.from(s);
    
    for (var i=0; i < str.length; i++) {
        if (str[i] == str[i+1]) {
            console.log(str[i] + str[i+1]);
            return true;
        }
    }
}

s = 'baabaa'
console.log(check(s));



function solution(s) {
    var answer = -1;
    
    var str = Array.from(s);
    
    console.log(str);
    
    
    while (check(str) == true && str.length != 0) {
        for ( var j = 0; j < str.length -1; j++) {
            if (str[j] == str[j+1]) {
                delete str[j];
                delete str[j+1];
            }
        } 
        console.log(str);
        
    }
    
    
    
    // if (str.length == 0) {
    //     answer += 2;
    // } else {
    //     answer += 1;
    // }
    
    // return answer;
}

console.log(solution(s));
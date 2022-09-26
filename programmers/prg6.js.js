function solution(n) {
    var answer = 0;
    
var i = 1;
while (n / i >= i){
    if (n / i === i) {
        let x = i+1;
        answer = (i+1)*(i+1);
        break;
    } else {
        answer = -1;
    } 
    
    i++;
    }
    return answer;
}
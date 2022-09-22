function solution(n) {
    var answer = 0;
    
   var count = 0;
    
   for (i = 1; i < n+1; i++) {
       if (n % i === 0) {
           count += i;
       }
   }
    answer = count;
    return answer;
}
var s = "110010101001";

var answer =[];

// count_0 += s.match(/0/g).length;
// 	var s = s.replace(/0/g, ""); 

var i = 0;
var count_0 = 0;

while ( s != 1 ) {

	var j = 0; 
    while(j < s.length) {
		if (s.charAt(j) === '0') {
			count_0 += 1;
			s = s.replace(/0/, "");
		} else {
            j++;
        }
		
	}

	var num = s.length;
	s = num.toString(2);

	i++;
}

answer.push(i);
answer.push(count_0);

console.log(answer);
var s = "110010101001";


// count_0 += s.match(/0/g).length;

// 	var s = s.replace(/0/g, ""); 

var i = 0;
var answer = [];
var count_0 = 1;

while ( s != 1 ) {

	for (var j = 0; j < s.length; j++) {
		if (s.charAt(j) === '0') {
			count_0 += 1;
			console.log(count_0);
			s = s.replace(/0/, "");
		}
		
	}

	var num = s.length;
	s = num.toString(2);

	i++;
}

answer.push(i);
answer.push(count_0);

console.log(answer);
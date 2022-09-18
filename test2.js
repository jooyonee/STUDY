var n = 2;
var queries = ["desk1 request", "desk2 request", "desk3 request", "desk2 realease", "desk3 request"];

// ip생성
var ip = [];
for (i = 1; i<n+1; i++) {
    ip.push('192.168.0.' + i);
}

// 요청 배열
var q_arr = [];
for (i=0; i < queries.length; i++) {
    var arr = queries[i].split(' ');
    q_arr.push(arr);
}
console.log(q_arr);


// ip 값만 있는 객체 만들어주기
const ip_obj = {};
for ( var i = 0; i < ip.length; i++) {
    ip_obj[ip[i]] = '';
}
console.log(ip_obj);


// ip에 desktop할당 (먼저 request 한 desktop에 ip할당)
for (var i = 0; i < q_arr.length; i++) {
    if (q_arr[i][1] === 'request' && ip_obj[ip[i]] === '') {
        ip_obj[ip[i]] = q_arr[i][0];
        var result = ip_obj[ip[i]] + ' ' + ip[i];
        console.log(result);
    }
    if (q_arr[i][1] === 'release') {
        ip_obj[ip[i]] = '';
    }ß
}



var k = 2;
var id_list = ["muzi", "frodo", "apeach", "neo"];
var report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];

var report_list = [];

var i = 0;
while (i<report.length) {
    var arr = report[i].split(' ');
    report_list.push(arr);
    i++;
}
console.log(report_list);


//키 값만 있는 객체 만들기
var k = [];
for (var i = 0; i < report_list.length; i++) {
    k.push(report_list[i][0]);
}
const obj = {};
for ( var i = 0; i < k.length; i++) {
    obj[k[i]] = '';
}
console.log(obj);



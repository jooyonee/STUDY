const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"], ["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

var answer = 0;

let count = clothes.length;  //전체 옷의 개수


//옷 종류
var clothes_type = [];   
for ( var i = 0; i < clothes.length; i++) {
    clothes_type.push(clothes[i][1]);
}
const real_type = [...new Set(clothes_type)];


//각 종류별로 몇개씩 있는지
var li = [];
var i = 0;
while (i < real_type.length) {
    var count_clothes = 0;
    for (var j = 0; j < clothes.length; j++) {    
        if (real_type[i] === clothes[j][1]) {
            count_clothes += 1;            
        }
    }
    li.push(count_clothes);
    i++;
}
const obj = {};
for (var i = 0; i < li.length; i++) {
    obj[real_type[i]] = li[i];
}
console.log(obj);








var m = 1;
for (var i = 0; i < li.length; i++) {
    m *= li[i];
}

answer = m + count;

if (real_type.length === 1) {
    answer = count;
}

console.log(answer);
var clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"],["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

var answer = 0;
var obj = {};

for(let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
}

console.log(obj);

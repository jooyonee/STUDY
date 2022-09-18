var obj = {
    name : "object", weight : 35, arr : [1, 2, 3]
};

var property_list = Object.keys(obj);
console.log("Property list : " + property_list);

for ( var i = 0; i < property_list.length ; i++) {
    var property_name = property_list[i];
    console.log(i+1, "번 째 인덱스는 ", property_name, "입니다.");
}

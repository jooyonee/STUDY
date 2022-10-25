function f() {
    console.log(this);
    console.log("f is called");

}
var o = {name : "object", method: f};

f();
o.method();



function setName(name) {
    this.name = name;
}

var o = {name : "object1", setName : setName};
var o2 = {name : "object2", setName : setName};

o.setName("o1");
o2.setName("o2");

console.log(o, o2);


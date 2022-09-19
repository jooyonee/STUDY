function isAdult(user) {
    if (user.age > 19) {
        return true;
    }
    return false;
}

const Mike = {
    name : 'Mike',
    age : 30
};
const Jane = {
    name : 'Jane',
};

console.log (isAdult(Mike) );
console.log(isAdult(Jane));


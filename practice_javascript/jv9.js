const user = {
    name : 'Mike',
    age : 30,
    sayHello() {
        console.log(`Hello, I'm ${this.name}`)
    }
}

user.sayHello();

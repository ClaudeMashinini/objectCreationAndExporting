class Person{
    constructor(name, age){
        this.age = age
        this.name = name
    }
    saySomething(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}
module.exports = Person;

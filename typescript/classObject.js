"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    display() {
        console.log(`this is ${this.name} and id is ${this.age}`);
    }
}
let user1 = (new User("anis", 25));
user1.display();

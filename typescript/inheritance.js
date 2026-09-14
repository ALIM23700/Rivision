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
class student extends User {
    newumber;
    constructor(name, age, newumber) {
        super(name, age);
        this.newumber = newumber;
    }
    display() {
        console.log(`this is ${this.name} and id is ${this.age} and ${this.newumber}`);
    }
}
let student1 = new student('alim', 25, 23);
student1.display();

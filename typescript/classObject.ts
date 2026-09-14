 class User{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name,
        this.age=age
    }
    display():void{
        console.log(`this is ${this.name} and id is ${this.age}`)
    }
 }
 let user1=(new User("anis",25))
 user1.display()
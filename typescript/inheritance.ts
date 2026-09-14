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
 class student extends User{
    newumber:number;
    constructor(name:string,age:number,newumber:number){
          super(name,age)
        this.newumber=newumber;
    }
    display():void{
        console.log(`this is ${this.name} and id is ${this.age} and ${this.newumber}`)
    }

 }
 let student1=new student('alim',25,23)
 student1.display()
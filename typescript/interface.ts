interface myint{
     name:string,
    age:number,
    id:number
}
let arr:myint[]=[]
let obj1:myint={
    name:'sma',
    age:24,
    id:23

}
let obj2:myint={
    name:'sma',
    age:24,
    id:23

}
let obj3:myint={
    name:'sma',
    age:24,
    id:23

    
}
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
console.log(arr)
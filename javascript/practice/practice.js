//--------basic------------
//console.log(10);
//alert("alim vai")
//document.write("alimvai")
//var eggName=25;
//console.log(eggName);
//var eggName="rahim";
//var isTrue=true;
//console.log(eggName);
//console.log(typeof(isTrue))


//-------array-----
//var publlics=[50000,100,300,400,500,1000];
//var frindsName=["alim","salim","dalim","valim"];
//console.log(publlics)
//console.log(frindsName)
//console.log(typeof(publlics))
//console.log(publlics.length)
//console.log(publlics.indexOf(300))
//console.log(publlics[3])
//publlics[0]=33;
//console.log(publlics)statu
//frindsName.push("kalam");
//frindsName.pop("kalam");
//console.log(frindsName)
//publlics.unshift(8)
//publlics.shift()
//publlics.sort()
//console.log(publlics)

//--------object-----------
/*var alim={
    name:"alim",
    age:25,
    isgood:true,
    interest:["frontend","backend"],
    alim2:{age:22,name:"someyhing"}

}*/
//alim.frinds=["rahim","karim"]
//delete alim.name
//console.log(alim)
//console.log(alim.age)
//console.log(alim["name"])
//console.log(typeof(alim))
//console.log(typeof(publlics))
//console.log(alim.alim2.age)


//---------null , undefined-----------
//var x;
//var y=null;
//console.log(x);
//console.log(typeof(x));
//console.log(y);
//console.log(typeof(y));

//----premative vs non premative
/* premative:number,bolian non-premative:array,object,function*/


//--------let,var,const-----------
/* var x=20;
var x=25;
console.log(x); */
//let x=20;
//let x=25;//cannot do redeclare
//x=34//resign possible
//const x=20;//cannot redeclare
//const x=25;//cannot reassign
//console.log(x);
//console.log(x);


//--------mathematical operation+string------------
//let x=10
//let y=20
//let z=x+y;
//console.log(z);//cabe minus,multiply,division
//let num1="abdul";
//let num2="alim";
//let num3=10;
//let num5=20;
//let num4="10";
//fullname=num1+" "+num2
//fullname2=num3+num4;
//fullname3=num3+num5+num4;
//fullname4=num3+num5+parseInt(num4);
//console.log(fullname);
//console.log(fullname2);
//console.log(fullname3);
//console.log(fullname4);

//-------int to string
//const a=40.444
//console.log(a.toFixed(2))
//const b=487.00006
//console.log(b.toString())
//const c="56"
//const d=Number(c);
//console.log(typeof(d))


//s--------horthand----------
//const price=10;
//price=price+1;

//price+=1;
//price++;

//--------------comparison operator-----------
//console.log(5<6)
//console.log(5==6)
//console.log(5=='5')//ture but type alada
//console.log(5==='5')//false

//----------conditional statement---------------
/*let price=15
if(price<15){
    console.log("burger khabo")

}
else
    console.log("barhgar khabo na")

const income=2000
const iphone=2
if(income==2000 && iphone==2){
    console.log("frindship korbo")
}
else{
    console.log("frindship korbo na")
}
const bari=2
const gari=1
if(bari==2|| iphone==2){
    console.log("frindship korbo")
}
else{
    console.log("frindship korbo na")
}*/

//--------------while loop--------------
//let count=0;
//while(count<5){
    //console.log("hello world");
    //count++;
//}
//const array=["rahim","karim","hadu","madu","jadu"]
//let count=0;
//while(count<array.length){
 //   console.log(array[count])
 //   count++;
//}
//let count=1;
//while(count<20){
   // console.log(count)
  //  count+=2;
//}



//-----------for loop----------------
//let i=0;
//for(i=0;i<20;i+=2){
   // console.log(i);
//}
//const array=["alim","dalim","salim"]
//let i=0;
//for(i=0;i<array.length;i++){
 //   console.log(array[i]);
//}



//----------do while loop---------------
//let a=1;
//do{
//    console.log("programimg shikbo")
//a++;

//}while(a<=10);

//------------switch case-------------
/*let num=1;

switch(num){
    case 0:
        console.log("zero")
        break;
    case 1:
        console.log("one")
        break;
     case 2:
        console.log("two")
        break;
    default:
        console.log("none")


}*/



//--------------ternary operator-----------

//let age=20;
//const vote=(age >18 ) ? console.log("vote dite parbe") : console.log("vote dite parbe")


//------------function------------------
/*function myname(name){
    console.log(name)
}
myname("alim");

function add(a,b){
    sum=a+b;
    return sum;
}
add(5,5);
console.log(sum);
const myobj={
    name:"alim",
    age:25,
    phone:"01791923700"
}
function myidentity(objname){
    console.log(`my name is ${objname.name} my age is ${objname.age} my phone ${objname.phone}`)
}
myidentity(myobj)
function myidentity(objname){
    console.log(`my name is ${objname.name} my age is ${objname.age} my phone ${objname.phone}`)
}
myidentity(myobj={
    name:"dalim",
    age:90,
    phone:"22019110"
})
const array=["alim","dalim","salim","valim"]
function myidentity(array){

    console.log(`my name is ${array[0] }`)
}
myidentity(array)

//---------rest operator--------------
function AddTocart(...num){
    return num

}
console.log(AddTocart(500,900,300));


//----------spread operator--------------
//let array1=[10,14,12]
//let array2=[3,7,2]
//let array3=[...array1,1,2,3];
//console.log(array3)

//array1=[1,2,3,4]
//function myarray(a,b,c,d){
 //   return console.log(a+b+c+d)
//}
//myarray(...array1);


//------------math-------------
const a=35.01;
const b=Math.floor(a)
const c=Math.ceil(a)
console.log(c)

//--------------date---------------
console.log(Date())

//--------------arrow function----------------
const yourinfo=()=>{
    console.log("this is arrow function")

}
yourinfo();
const add=(a,b)=>console.log(a+b);
add(5,5);*/


//---------ForEach loop-------------
//const heros=["allu","ballu","sallu","arjun vudai"]
// heros.forEach((hero)=>{
    //console.log(hero)
//})


//-------------------------map-------------------------
//const numbers=[1,2,3,4,5,6,7,8]
//numbers.map((num)=> console.log(num));


//-------------------------Filter-----------------------
/*const myobj=[
    {
        name:"alim",
        age:"25",
        profession:"actor"
    },
    {
        name:"vlim",
        age:"50",
        profession:"doctor"
    },
    {
        name:"dlim",
        age:"29",
        profession:"enginner"
    }
]
const newobj=myobj.filter((ok)=> ok.profession=='actor');
console.log(newobj)

//----------------array reduce value-----------------
const numbers=[1,2,3,4]
const result=numbers.reduce((prevalue,currentvalue)=>{
    return prevalue+currentvalue
},0)
console.log(result)

const shoppingCart=[
    {
        name:"iphone 12",
        price:13000
    },
    {
        name:"iphone 14",
        price:15000
    },
    {
        name:"iphone 16",
        price:18000
    },
]
const totalcart=shoppingCart.reduce((previtem,newitem)=>{
    return previtem+newitem.price;
},0)
console.log(totalcart)


//----------------slice-----------------
const numbers=[1,2,3,4,5,6,7,8,9]
const newnumbers=numbers.slice(2,5)
console.log(newnumbers)

//----------------splice----------------
const numbers=[1,2,3,4,5,6,7,8,9]
const newnumbers=numbers.splice(2,5,7,7)
console.log(newnumbers)
console.log(numbers)

//----------Destructuring-----------------
const newobj={
    name:"alim",
    price:90,
    mobile:"01791723700"
}
const {name,price,mobile}=newobj
console.log(name);
console.log(price);
console.log(mobile);

//---------------For in loop------------------
const frinds={
    name:"alim",
    age:25,
    mobile:'01791723799'


}
for(let frind in frinds){
    console.log(frinds[frind]);
}
const alimarray=["alim","dalim","salim","valim"];
for(let x in alimarray){
    console.log(alimarray[x])
}

const aalim=["alim","salim","kalim"];
for(let x in aalim){
    console.log(aalim[x])
}

//---------------for of loop--------------------
const frinds={
    name:"alim",
    age:25,
    mobile:'01791723799'


}
const keys=Object.keys(frinds)
for(let key of keys){
    console.log(keys[key])
}

//--------------global,local scope-------------
for(let i=1;i<9;i++){
    let sum=1;
    sum=sum*i;
   
}
 console.log(sum)

 function sum(){
    let store=0;
    for(let i=0;i<arguments.length;i++)
         store=store+arguments[i];
    {
        console.log(store)
    }
 }
sum(2,3,4,5)


//--------------remove duplicate element-----------------


const newarray=["alim","dalim","salim","valim","alim"]
function removeduplicate(newarray){
    let storearray=[];
    for(let i=0;i<newarray.length;i++){
        const name=newarray[i];
        if(storearray.includes(name)===false'){
            storearray.push(name);
        }
       
    }
    return storearray
}
const result=removeduplicate(newarray);
console.log(result)


//error handeling using use strict
//"use strict"
//a=5;
//console.log(5)


//-----------------this keyword------------------
const pareantaray={
    name:"alim",
    ahge:25,
    message: function (){
        console.log(`this is abdul ${this.name}`)
    }

}

pareantaray.message()

const newarray=[
    {
    name:'alim',
    age:26
   },
    {
    name:'dlim',
    age:27
   },
    {
    name:'slim',
    age:27
   },
    {
    name:'dlim',
    age:28
   }
]
function newfunction(newarray,search){
    const newmine=[]
    for(let num in newarray){
       
        if(newarray[num].name===search){
            newmine.push(newarray[num].name)
        }
    }
   return newmine;

}
const result=newfunction(newarray,'alim');
console.log(result)


//----------------setTimeout-----------------
const first=(a,b,callback)=>{
    setTimeout(()=>{

        console.log(a+b)
         callback()
    },5000)
   
}
const second=()=>{
    console.log("hi i am second")
}

first(5,5,second)


//------------promise------------------
let willmarry=true;
new Promise((resloved,reject)=>{
    setTimeout(()=>{
        if(willmarry){
            resloved('success')
        }
        else
            reject("soryy...")

    },1000)

})
.then(()=>{
    console.log("promise kept")
})
.catch(()=>{
    console.log("promise not kept")
})*/
const addtocart=()=>{
    localStorage.setItem("name","abdul alim")
     localStorage.setItem("bal","abdul alim2")
}

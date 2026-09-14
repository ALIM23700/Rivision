let userinfo:()=>void
let userinfo1:(name:string)=>string;

userinfo=()=>{
    console.log('hello')
}
userinfo1=(name:string)=>{
   
    return name
}
console.log(userinfo1("alim"))
userinfo()
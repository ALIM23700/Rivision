//getElementbyid
const heading=document.getElementById('heading-1').innerHTML="this is zaman"

//getElementBy className
const myclass=document.getElementsByClassName('myclass')
console.log((myclass))

//quaryselector
document.querySelector('#heading-1').innerHTML="this is rj kibriaya"
const quaryclass=document.querySelector('.myclass2')
console.log(quaryclass)

//onclick
function something(){
  const heading=document.getElementById('heading-1').innerHTML="this is onclick"
  
}
//style
const style=document.getElementById('style')
style.style.color='red';




//createElement
const body=document.getElementById('bodytag')
const div=document.createElement('div')
body.appendChild(div)

const headingcreate=document.createElement('h1')
headingcreate.innerText='this is create element';
div.appendChild(headingcreate)

//addeneventLister
document.getElementById('btn-2').addEventListener('click',function (){
  const mad=document.getElementById('mad').innerHTML="this is fucking creazy"
})


//input value

const button=document.getElementById('button').addEventListener('click',function(){
  const input=document.getElementById('input')
  const comment=document.getElementById('comment-place')
  const createcommnet=document.createElement('p')
  createcommnet.innerHTML=input.value;
  comment.appendChild(createcommnet);

})
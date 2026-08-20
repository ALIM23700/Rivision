import { useEffect, useReducer, useRef, useState } from 'react'
import Home from './components/Home'
import './App.css'
import Contact from './components/Contact'
import Products from './components/Products'
import Placement from './components/Placement'
import DrilOne from './components/drilOne'
import Driltwo from './components/driltwo'
import Drilthree from './components/drilthree'
import { Context1 } from './Context/contex1'
import useCounter from './Hooks/useCounter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Nav from './Nav/nav'
import ProductsDetails from './components/ProductsDetails'
import NewProducts from './components/NewProducts'
import Protected from './Protected'



function App() {
  
  const [increasehandle,decreasehandle,price]=useCounter()

  
  const [isloggedin,setIsloggedin]=useState(false);
   const handlelogin=()=>{
    setIsloggedin(!isloggedin)
   }

  const initialBounce=0;
  
  const reducer=(state,action)=>{
    if(action=='plus'){
      return state+1;
    }

  }
 const [bounce,dispatch]= useReducer(reducer,initialBounce)
  

    const something=()=>{
      const service=document.getElementById("bal")
      service.innerHTML="change kore dilam"
    }
    const products={
      name:"nokia",
      price:100
    }
   const myname=["jadu","madu","kadu"]

  const galidei=()=>{
    alert("fuck you")
  }
  

  
  const [alldata,setAlldata]=useState([])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> setAlldata(data))
   
    
  },[])
  const [cart,setCart]=useState([])
  const handlecart=(product)=>{
    const newcart=[...cart,product]
    setCart(newcart)

    
  }
  
  const [toggle,setToggle]=useState(false)
  const hlwharamjada=()=>{
    setToggle(!toggle)
  }
  const [name,setName]=useState(0);
  const [email,setEmail]=useState(0);
  const [password,setPassword]=useState(0);

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(name);
     console.log(email);
      console.log(password);
  }
  

 const nameref=useRef()
  const emailref=useRef()
   const passwordref=useRef()

  const handlesubmit2=(e)=>{
    e.preventDefault()
    console.log(nameref.current.value);
     console.log(emailref.current.value);
      console.log(passwordref.current.value);
  }
  
  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
         <Route path='*' element={<About></About>}></Route>
         <Route path='/newproducts' element={<Protected isloggedin={isloggedin}><NewProducts></NewProducts></Protected>}></Route>
         <Route path='/newproducts/:id' element={<ProductsDetails></ProductsDetails>}></Route>
      </Routes>
      </BrowserRouter>
      <button className='btn' onClick={handlelogin}>{isloggedin ? 'login' : 'logout'}</button>
      <button onClick={()=>dispatch('plus')} className='btn'>bounce:{bounce}</button>
      <form onSubmit={handlesubmit} className='border bg-amber-100 w-84 p-5 m-12'>
        <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='enter our name' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter our email' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='enter our passwod' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <button type='submit' className='border bg-blue-500 rounded-md p-2 ml-24'>submit</button>
      </form>
      
      <form onSubmit={handlesubmit2} className='border bg-amber-600 w-84 p-5 m-12'>
        <input ref={nameref} type='text' placeholder='enter our name' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <input ref={emailref} type='email' placeholder='enter our email' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <input ref={passwordref} type='password' placeholder='enter our passwod' className='block p-2 bg-amber-50 rounded-md m-5'></input>
        <button type='submit' className='border bg-blue-500 rounded-md p-2 ml-24'>submit</button>
      </form>
    <Context1>
      <DrilOne></DrilOne>
        
    </Context1>
     
      
     <div className='flex mt-5  justify-center items-center h-48 w-48 '>
          {
           alldata.map((product)=><Products product={product} handlecart={handlecart}></Products>)
          }
          <Placement cart={cart}></Placement>
     </div>
      <buttton onClick={hlwharamjada} className='bg-blue-500 p-2 rounded-md text-white mt-14 ml-12' >Make it {toggle ? 'normal' : 'special'}</buttton>
      <div className={`${toggle ? 'bg-amber-700 m-12 border rounded-md h-48 w-48 shadow-md' : "bg-amber-100 m-12 w-36 h-36"}`} >
        this is {toggle ? 'special div' : 'normal div'}
      </div>
      <h1>price:{price}</h1>
      <button className='btn' onClick={increasehandle}>Increase</button><br></br><br></br>
       <button className='btn' onClick={decreasehandle}>Decrease</button>
      <h2>price:{price}</h2>
      <p>price:{price}</p>
      <button className='btn' onClick={galidei}>Gali</button>
      <h1 id='bal'>Ok vai</h1>
         <button className='btn'  onClick={something}>Click Me</button>
         {
          myname.map(n=><Contact n={n}></Contact>)
         }
         
      <Home products={products} name={name} galidei={galidei}></Home>
    </div>
  )
}

export default App

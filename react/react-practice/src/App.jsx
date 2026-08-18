import { useEffect, useState } from 'react'
import Home from './components/Home'
import './App.css'
import Contact from './components/Contact'
import Products from './components/Products'
import Placement from './components/Placement'


function App() {
  const [price,setPrice]=useState(0)
  const [alldata,setAlldata]=useState([])

    const something=()=>{
      const service=document.getElementById("bal")
      service.innerHTML="change kore dilam"
    }
    const products={
      name:"nokia",
      price:100
    }
   const name=["jadu","madu","kadu"]

  const galidei=()=>{
    alert("fuck you")
  }
  

  const increasehandle=()=>{
    
    setPrice(price+1)
   
  }
  const decreasehandle=()=>{
    
    setPrice(price-1)
   
  }
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(data=>setAlldata(data))
   
    
  },[])
  const [cart,setCart]=useState([])
  const handlebutton=(product)=>{
    

    const newcart=[...cart,product]
    setCart(newcart);
  }
  
  return (
    <div>
    
     
     <div className='flex justify-center items-center gap-12 mt-12 rounded-md flex-wrap'>
      
       {
        alldata.map((product)=> <Products product={product} handlebutton={handlebutton}></Products>)
       
      }
      <Placement cart={cart}></Placement>
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
          name.map(n=><Contact n={n}></Contact>)
         }
         
      <Home products={products} name={name} galidei={galidei}></Home>
    </div>
  )
}

export default App

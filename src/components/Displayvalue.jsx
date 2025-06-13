import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Displayvalue() {
    const nav = useNavigate();
    const [convertnewval,setConvertnewval] = useState([])

    useEffect(()=>{
    let localval = localStorage.getItem("user");
    let convertval = JSON.parse(localval);
    console.log(convertval);
    setConvertnewval(convertval)
    },[])

    function navfun(){
      nav("/")
    }

    function delfun(ind){
      //  const filtval = convertval.filter((data)=>data.mob !== conmob)
      // let localval = localStorage.getItem("user");
      // let convertnewval = JSON.parse(localval);
      console.log(ind);
      
      convertnewval.splice(ind,1)
      console.log(convertnewval);
      let newnew = convertnewval.filter((data)=> data !== convertnewval)
      console.log(newnew);
      setConvertnewval(newnew)
      localStorage.setItem('user',JSON.stringify(convertnewval))
    }

    function upfun(ind){
      let filtval = convertnewval[ind];
      console.log(filtval);
      nav("/update/"+ind)
    }
  
  return (
    <>
        <div className='container'>
            <div className='row'>     
             <h1 className='border border-solid-black text-center bg-info p-3'>Data Page</h1>
              {convertnewval.map((val,ind)=>{
            return(
            <>
            <div className='col-lg-4'>
                  <div className='card p-3 mt-3'>
                    
                        <pre>Name : {val.name}</pre>
                        <pre>EmailId : {val.email}</pre>
                        <pre>MobileNumber : {val.mob}</pre>
                        <pre>Age : {val.age}</pre>

                        <button onClick={()=>delfun(ind)} style={{marginBottom:"9px", backgroundColor:"red", color:"white"}} >Delete</button>
                        <button onClick={()=>upfun(ind)} style={{marginBottom:"9px", backgroundColor:"blue", color:"white"}}>Update</button>
                  </div>  
            </div> 
            </>
            )})}
            <button onClick={navfun} style={{color:"orange", fontFamily:"cursive", fontSize:"25px", letterSpacing:"3px", marginTop:"25px"}}>Home</button>
            </div>
            </div>                
    </>
  )
}

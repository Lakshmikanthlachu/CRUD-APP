import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Form() {

    const navigate = useNavigate();

  const [err,setErr]=useState({
    name:{required:false},
    email:{required:false},
    mob:{required:false},
    age:{required:false}
  })

  const [userval,setUserval]=useState({
    name:"",
    email:"",
    mob:"",
    age:""
  })

  function changeval(e){
    setUserval({...userval,[e.target.name]: e.target.value})
}
console.log(userval);

function submitfun(e){
    e.preventDefault();
    let errormsg = {
         name:{required:false},
         email:{required:false},
         mob:{required:false},
         age:{required:false}
    }

    if(!userval.name){
        errormsg.name.required=true;
    }
    else if(!userval.email){
        errormsg.email.required=true;
    }
    else if(!userval.mob){
        errormsg.mob.required=true;
    }
    else if(!userval.age){
        errormsg.age.required=true;
    }
    else{
        let savedval=localStorage.getItem('user')
        let getval = (savedval)?JSON.parse(savedval):[]
        getval.push(userval)
        localStorage.setItem('user',JSON.stringify(getval)) 

        navigate('/displayvalue')
    }

    setErr(errormsg)
}

// function nextpage(){
//   nav("/displayvalue")
// }
return (
    <>
<div className='container mt-3'>
    <div>

    </div>

    <div className='row'>
        <div className='col-lg-4'>

        </div>
      <div className='col-lg-4 p-4 border border-4'>
      <form onSubmit={submitfun}>
              <h3 className='text-center pb-3'>Details</h3>
      <div className="form-floating mb-3">
      <input type="text" name='name' onChange={changeval} className="form-control"  placeholder="name@example.com"/>
      <label htmlFor="Name">Name</label>
      {!(err.name.required)===false?<div style={{ color: "red" }}>!!!Enter your firstname Here...</div>:""}
       
      </div>
      <div className="form-floating mb-3">
      <input type="email" name='email' onChange={changeval} className="form-control" placeholder="email"/>
      <label htmlFor="Emailid">EmailId</label>
       {!(err.email.required)===false?<div style={{ color: "red" }}>!!!Enter your Emailid...</div>:""}
      </div>

      <div className="form-floating mb-3">
      <input type="number" name='mob' onChange={changeval} className="form-control" placeholder="mobile"/>
      <label htmlFor="MobileNum">Mobile Number</label>
       {!(err.mob.required)===false?<div style={{ color: "red" }}>!!!Enter your Password...</div>:""}
      </div>

      <div className="form-floating mb-3">
      <input type="number" name='age' onChange={changeval} className="form-control" placeholder="Age"/>
      <label htmlFor="Age">Age</label>
       {!(err.age.required)===false?<div style={{ color: "red" }}>!!!Enter your Age...</div>:""}
      </div>


        <div className="d-grid gap-2 col-6 mx-auto">
           <button className="btn btn-primary" type="submit">Submit</button>
           <button className="btn btn-primary" onClick={()=>navigate("/displayvalue")}>NextPage</button>
        </div>
        </form>
      </div>
        <div className='col-lg-4'>

        </div>
      
    </div>
  </div>
    </>
  )
}

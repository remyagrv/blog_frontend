import React, { useEffect, useState } from 'react';
import validation from './validation.js';
import Login from './Login.js';
// import './Login.css';

function Signup(props) {
  // storing registration values
  
  const [registrationValues,setRegistrationValues] = useState({username: "", email: "", password: "" });
  const [formErrorValues, setFormErrorValues] = useState({});  
  const [isSubmit, setIsSubmit] = useState(false); 
  
  let name, value;
  const handleInputs = (e) => {
  
    console.log(e.target);
     name = e.target.name;
    value = e.target.value;
     setRegistrationValues({...registrationValues, [name]:value});
  }
  const handleSubmit = (event) =>{
    setIsSubmit(true);
// for not refreashing the form
event.preventDefault();
setFormErrorValues(validation(registrationValues));
console.log(formErrorValues);
}
useEffect(()=>{
  if(Object.keys(formErrorValues).length===0 && isSubmit){

      alert("Sign up successful");
  }
},[formErrorValues]);
  async function fetchRegister(){
    const username = registrationValues.username;
    const email = registrationValues.email;
    const password = registrationValues.password;
    const response = await fetch(`/api/registration/signup`,{method:'post',
    body: JSON.stringify({username, email, password}),
    headers:{
        'Content-Type' : 'application/json'
    }
})
const body = await response.json();
setRegistrationValues(body);
// setRegistrationValues({username: "", email: "", password: "" });
}


    return (
      <div className="body">


          <div className="signin">
            <div className="back-img">
            <h2 style={{color:"orange",border: "2px solid orange"}}>My Blog App</h2>
            <div className="sign-in-text">
            {(Object.keys(formErrorValues).length===0 && isSubmit) ? (<Login/>) : ( <pre className='pretext'>{JSON.stringify(registrationValues, undefined, 2)}</pre>) }
        </div>    
    </div>
    <div className="form-section">
     <h2 style={{color:"blue"}}>Sign Up</h2>
     <form onSubmit={handleSubmit}>
     <br></br><input style={{width:"350px", height:"40px"}} type="text" required placeholder="username:" name="username"  value={registrationValues.username}  onChange={handleInputs} ></input>
     <p >{formErrorValues.username}</p>
        <br></br><input style={{width:"350px", height:"40px"}} type="text" required placeholder="email:" name='email' value={registrationValues.email} onChange={handleInputs}></input>
        <p>{formErrorValues.email}</p>
      
      <br></br><input style={{width:"350px", height:"40px"}} type="password" required placeholder="Password:" name='password' value={registrationValues.password} onChange={handleInputs} ></input><br></br>
      <p>{formErrorValues.password}</p>
      <br></br><input style={{width:"350px", height:"40px"}} type="password" required placeholder="Confirm Password:" name ="cpassword" ></input>

       
      
        
      
      </form><br></br>
      
      
    </div>
       
    <button className='sign-in-btn' onClick={fetchRegister} >
     Register
    </button>

 
 </div>

         
       
        
        </div>
          
    );
  

}

export default Signup;
import {React, useState} from 'react';
import {Navigate } from 'react-router-dom';

// import './Login.css';


function Login(props) {
  const [formValues,setFormValues] = useState({username:"", password:""})
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (event) => {
    // console.log(event.target);
    const {name, value} = event.target;
    //destructuring
    setFormValues({...formValues,[name]:value});   
}
 const handleLogin = (event) =>{
  setIsSubmit(true);
// for not refreashing the form
event.preventDefault();
const value = fetchRegister();
value.then((a)=>{
  console.log(a);
  if(a){
    alert("Login successful!!!");
   

  }else{
    setIsSubmit(false);
    alert("Invalid Credentials!!!");
  }
})

// if(value){
//   alert("s");
// }else {
//   alert("f");
// }
}
   async function fetchRegister(){
    const username = formValues.username;
    
    const password = formValues.password;
    const response = await fetch(`/api/login`,{method:'post',
    body: JSON.stringify({username, password}),
    headers:{
        'Content-Type' : 'application/json'
    }
})
const body = await response.json();
// setFormValues(body);

return body;

// setRegistrationValues({username: "", email: "", password: "" });
}


  
    return (
      <div className="body">

          <div className="signin">
            <div className="back-img">
            <h2 style={{color:"orange"}}>My Blog App</h2>
            <div className="sign-in-text">
            
        </div>    
    </div>
   
    <div className="login">
    { (isSubmit) ? (<Navigate to='/home'/>): ( <Navigate to='/'/>) }
     <form onSubmit={handleLogin}>
     <h2 style={{color:"blue", marginLeft:"105px"}}>Log In</h2>
     {console.log(formValues)}
 
        <br></br><input style={{marginLeft:"14px",width:"300px", height:"40px"}} type="text" placeholder="Username:" name ="username" value={formValues.username} onChange={handleChange} ></input>
      <br></br>
      <br></br>
    
        <br></br><input style={{marginLeft:"14px",width:"300px", height:"40px"}} type="password" placeholder="Password:"  name ="password" value={formValues.password} onChange={handleChange} ></input>
        <br></br><br></br>
         <button  className='sign-in-btn' style={{backgroundColor:'blue',marginLeft:"14px",width:"300px", height:"40px"}} >
      Log In
    </button >
      
      </form><br></br>
      {/* <a href= >Don't have an account? Sign Up!</a>   */}
    
      
    </div>
       
    <a href='/signup'>Don't have an account? Sign Up!</a>

 
 </div>

         
       
        
        </div>
          
    );
  

}

export default Login;
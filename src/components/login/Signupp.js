import {React, useEffect, useState} from 'react';
import {Navigate } from 'react-router-dom';
import './Login.css';
import validation from './validation.js';

function Signup() {
const [formValues,setFormValues] = useState({username:"", email:"", password:"", cpassword:""})
const [formErrorValues, setFormErrorValues] = useState({});    
const [isSubmit, setIsSubmit] = useState(false);
const handleChange = (event) => {
        // console.log(event.target);
        const {name, value} = event.target;
        //destructuring
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
        // name is a key and ... for appending email value to form value.
    }
    const handleSubmit = (event) =>{
        setIsSubmit(true);
// for not refreashing the form
    event.preventDefault();
    setFormErrorValues(validation(formValues));
    }
    useEffect(()=>{
        if(Object.keys(formErrorValues).length===0 && isSubmit){
           
            fetchRegister();
           
            alert("Sign up successful");
        }
    },[formErrorValues]);
    

    async function fetchRegister(){
        const username = formValues.username;
        const email = formValues.email;
        const password = formValues.password;
        const response = await fetch(`/api/registration/signup`,{method:'post',
        body: JSON.stringify({username, email, password}),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const body = await response.json();
    setFormValues(body);
    // setRegistrationValues({username: "", email: "", password: "" });
    }
return (
        <div className="body">
            {/* <pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <div className="back-img">  	
            <h2 style={{color:"orange"}}>My Blog App</h2>
		</div>
       
{(Object.keys(formErrorValues).length===0 && isSubmit) ? (<Navigate to='/'/>): ( <Navigate to='/signup'/>) }
			<div className="signup">
                
				<form onSubmit={handleSubmit}>
                <h3 style={{marginLeft:"140px"}}>Sign up</h3><br></br>
					<br></br><input style={{ marginLeft:"10px",width:"350px", height:"40px"}} type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange} required=""/><br></br>
                    <p>{formErrorValues.username}</p>
					<br></br><input style={{ marginLeft:"10px",width:"350px", height:"40px"}} type="email" name="email" placeholder="Email" required="" onChange={handleChange} value={formValues.email}/><br></br>
                    <p>{formErrorValues.email}</p>
					<br></br><input style={{ marginLeft:"10px",width:"350px", height:"40px"}} type="password" name="password" placeholder="Password" required="" onChange={handleChange} value={formValues.password}/><br></br>
                    <p>{formErrorValues.password}</p>
                    <br></br><input style={{ marginLeft:"10px",width:"350px", height:"40px"}} type="password" name="cpassword" placeholder="Confirm Password" required="" onChange={handleChange} value={formValues.cpassword}/><br></br>
					<br></br><button style={{backgroundColor:'blue', marginLeft:"10px",width:"350px", height:"40px"}} >Sign up</button>
				</form>
			</div>
            <a href='/'>Already have an account? Log In!</a>

			{/* <div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div> */}
	
            
        </div>
    );
}

export default Signup;
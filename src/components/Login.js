import React, { useRef, useState } from 'react'
import { checkFormData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";


function Login() {
  const [isformValid,setisformValid]=useState();
  const [issignup,setissignup]=useState(false);
  const [isfirbasevalidation,setisfirbasevalidation]=useState();
  const Emailref = useRef(null);
  const PasswordRef=useRef(null);
  const nameRef=useRef(null);

  const handleEmailChange=(e)=>{
    e.preventDefault();
    // console.log(Emailref.current.value)
  }

  const handlePasswordChange=(e)=>{ 
    // console.log(PasswordRef.current.value)  
  }

  const handleNameChange=(e)=>{
    e.preventDefault();
    // console.log(nameRef.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationResult = checkFormData(Emailref.current.value, PasswordRef.current.value);
    // console.log(validationResult, "validationResult");
    if (validationResult.isEmailValid && validationResult.isPasswordValid) {
      setisformValid(true);
      if (issignup) {
        createUserWithEmailAndPassword(auth, Emailref.current.value, PasswordRef.current.value)
          .then((userCredential) => {
            // Signed up 
            updateProfile(auth.currentUser, {
              displayName: nameRef.current.value, photoURL: "https://avatars.githubusercontent.com/u/56525313?s=96&v=4"
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            }); 
            const user = userCredential.user;
            setisfirbasevalidation("");
            // console.log(user, "user");
            // navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            let errormsg=errorCode + errorMessage;
            setisfirbasevalidation(errormsg);
          });
        
      }
      signInWithEmailAndPassword(auth, Emailref.current.value, PasswordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          setisfirbasevalidation("");
          // console.log(user, "user");
          // navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          let errormsg=errorCode + errorMessage;
          setisfirbasevalidation(errormsg); 
        });
    } else {
      setisformValid(false);
    }
  }

  const handleSingnUpButton=(e)=>{
    e.preventDefault();
    setissignup(!issignup)
  }

  return (
    <div >
      <div className='relative'>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg" />

      </div>

     <form className='absolute p-12 bg-black bg-opacity-80 w-3/12 top-40 mx-auto left-0 right-0 '>
     <h1 className='text-2xl font-bold text-white'>{issignup?"SignUp":"Sign In"}</h1>

     {issignup && <input type="text" placeholder="Username" className="w-full p-2 my-2 bg-gray-600" onChange={handleNameChange} ref={nameRef}/>}

      <input type="email" 
      placeholder="Enter Email" 
      className="w-full p-2 my-2 bg-gray-600" 
      ref={Emailref}
      onChange={handleEmailChange}/>

      <input type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray-600" ref={PasswordRef} onChange={handlePasswordChange}/>
      <button className=" py-2 my-2 font-bold text-white bg-red-600 rounded top-10 hover:bg-red-600 w-full " onClick={handleSubmit}>{issignup?"SignUp":"Sign In"}</button>
      {(isformValid===false) && <p className='text-red-600 p-2 my-2'>Username/password is invalid</p>}
      {(isfirbasevalidation) && <p className='text-red-600 p-2 my-2'>{isfirbasevalidation}</p>}
      {!issignup ?<h1 className='text-white p-2'>New to Netflix? <button className='text-red-600 m-2 p-2' onClick={handleSingnUpButton}>Sign up now</button></h1>:<button className='text-red-600 m-2 p-2' onClick={handleSingnUpButton}>Login In</button>}
     </form>

    </div>
    
  )
}



export default Login
import React from 'react'
import { useState } from 'react';
import Add from '../img/addAvatar.png'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();


  async function handleSubmit(e){
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err){
      setErr(err);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? <Link to={"/register"}>Register</Link></p>
        </div>
    </div>
  )
}

export default Login;
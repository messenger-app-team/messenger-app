import React, {useState, useRef} from "react";
// import { set } from "react-hook-form";
import {useAuth} from '../contexts/AuthContext'
// import {useForm} from 'react-hook-form';

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup, currentUser} = useAuth()
  const [error, setError] = useState('')
  const[loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
      if(passwordRef.current.value !== passwordConfirmRef){
        return setError('Passwords do not match')
       
      }
      console.log(setError())
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
      } catch {
        setError('Failed to create account')
      }
      setLoading(false);
  }

  return (
     <>
<div className=" flex items-center justify-center h-screen">
  <form onSubmit={handleSubmit} className="w-3/12 bg-none shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center flex flex-col">
    <div className="mb-4 text-white">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="Email">
        {JSON.stringify(currentUser)}
        Email
      </label>
      <input className=" text-black shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Email" ref={emailRef}/>
    </div>
    <div className="mb-6 text-white">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className=" text-black shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" ref={passwordRef}/>
      <p className="text-red text-xs italic">Please choose a password</p>
    </div>
    <div className="mb-6 text-white">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className=" text-black shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" ref={passwordConfirmRef}/>
      <p className="text-red text-xs italic">Confirm password</p>
    </div>
    <div className="flex items-center justify-between">
      <button disabled = {loading }className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
      <a className="inline-block align-baseline font-bold text-white text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
    
</form>
</div>
  </>
  )
}

export default Signup;

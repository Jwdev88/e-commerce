import React, { useState } from 'react'

const Login = () => {
  
  const [currentState,setCurrentState] = useState('Login')
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prate-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '':<input className='w-full px-3 py-2 border border-gray-800' placeholder='name' type="text"  required/>}
      <input className='w-full px-3 py-2 border border-gray-800' placeholder='email' type="email"  required/>
      <input className='w-full px-3 py-2 border border-gray-800' placeholder='password' type="password" required />
      <div className='w-full flex justify-between text-sm mt-[-8x]'>
        <p className='cursor-pointer'>Forget your password?</p>
        {
          currentState ==='Login'
          ? <p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='Login' ? 'Sign in': 'Sign up'}</button>
    </form>
  )
}


export default Login

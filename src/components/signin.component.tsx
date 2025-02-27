import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/useRedux"
import { signIn } from "../redux-store/slices/userSlice"

const SignIn = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    const dispatch = useAppDispatch()
  
    const signin = (e:any) => {
      e.preventDefault()
      dispatch(signIn({name, email}))
    }

    return(
      <div className='flex flex-col gap-y-4'>
        <div className='signin'>
          <h1>Sign In</h1>
          <form onSubmit={signin} name='signin_form'>
          <input 
            type='text'
            value={name}
            required
            placeholder="Enter your name"
            onChange={e => setName(e.target.value)}/>
  
            <input 
              type='email'
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}/>
  
            <button type='submit' className="border p-2">Sign in</button>
          </form>
        </div>
      </div>
    )
  }

  export default SignIn;
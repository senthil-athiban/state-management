import { useState } from "react"
import { useAppDispatch } from "../hooks/useRedux"
import { signIn } from "../redux-store/slices/userSlice"

const ReduxLogin = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    const dispatch = useAppDispatch()
  
    const signin = (e:any) => {
      e.preventDefault()
      dispatch(signIn({name, email}))
    }

    return(
        <div>
          <p className="text-lg font-bold">Sign In ( USING REDUX)</p>
          <form onSubmit={signin} name='signin_form'  className='flex flex-col gap-y-4'>
          <input 
            type='text'
            value={name}
            required
            placeholder="Enter your name"
            className='border rounded-lg ml-2'
            tabIndex={4}
            onChange={e => setName(e.target.value)}/>
            
  
            <input 
              type='email'
              value={email}
              required
              placeholder="Enter your email"
              className='border rounded-lg ml-2'
              tabIndex={3}
              onChange={e => setEmail(e.target.value)}/>
  
            <button type='submit' className="border p-2">Sign in</button>
          </form>
        </div>
    )
  }

  export default ReduxLogin;
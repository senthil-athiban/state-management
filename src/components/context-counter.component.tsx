import React from 'react'
import { useCounter } from '../context/counter.context'

const ContextCounterComp = () => {
    const { count, setCount } = useCounter();
  return (
    <div className='flex flex-col gapy-y-2'>
        <div>
            <Increase />
            <Decrease />
        </div>
        <Count />
    </div>
  )
}

const Count = () => {
    const { count } = useCounter();
    return (
        <p>count: {count}</p>
    )
  }
  
  const Increase = () => {
    const { setCount } = useCounter();
  
    return (
        <button onClick={() => setCount(p => p+1)}>Increase</button>
    )
  }
  
  const Decrease = () => {
    const { setCount } = useCounter();
    return (
        <button onClick={() => setCount(p => p-1)}>Decrease</button>
    )
  }

export default ContextCounterComp
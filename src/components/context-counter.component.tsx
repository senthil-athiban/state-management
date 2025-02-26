import React from 'react'
import { useCounter } from '../context/counter.context'

const ContextCounterComp = () => {
  return (
    <div className='flex flex-col gapy-y-2'>
      <p className='font-bold'>Using Context API</p>
        <Count />
        <div>
            <Increase />
            <Decrease />
        </div>
        <IsEven />
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

  const IsEven = () => {
    const {count} = useCounter();
    const isEven = count % 2 === 0;
    return (
      <p>{isEven ? "Even" : "Odd"}</p>
    )
  }

export default ContextCounterComp
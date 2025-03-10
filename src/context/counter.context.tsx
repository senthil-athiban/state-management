import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    increment: () => void;
    decrement: () => void;
}
const CounterContext = createContext<CounterContextType | undefined>(undefined);

const CounterProvider = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(p => p+1), []);
    const decrement = useCallback(() => setCount(p => p-1),[]);
    
    const value = useMemo(() => ({
        count,
        setCount,
        increment,
        decrement
    }),[count, increment, decrement]);
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = (): CounterContextType => {
    const counterContext = useContext(CounterContext);
    if(!counterContext) {
        throw new Error('useCounter must be used inside within the  counter provider');
    }
    return counterContext;
}
export default CounterProvider;
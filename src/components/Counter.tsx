import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return <div>
        <span>{counter}</span>
        <button onClick={() => {
            setCounter(prev => prev +1)
        }}>Click</button>
    </div>
}
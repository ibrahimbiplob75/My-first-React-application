import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0)
    const [Rcount, RsetCount]=useState(100)
    function alhamduillah(){
        const newCount=count+1;
        setCount(newCount)
    }
    function reduce(){
        const newCount=Rcount-1;
        RsetCount(newCount);
    }
    return (
        <div>
            <h2>Alhamduillah:{count}</h2>
            <h2>SubhanAllah:{Rcount}</h2>
            <button onClick={alhamduillah}>Alhamduillah</button>
            <button onClick={reduce}>SubhanAllah</button>
        </div>
    )
}
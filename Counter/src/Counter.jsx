import { useState } from "react";
// import './index.css'

function Counter(){
    const[count,setcount] = useState(0)
    function increase(){
        setcount(count+1)
    }
    function decrease(){
        setcount(count-1)
    }
    return(
        <div>
            <h1>Counter App</h1> <br />
            <h2>{count}</h2>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}
export default Counter;
import React,{useState} from "react"
import "../App.css"


function FunctionCounter(){
    const [number,setNumber] = useState(0)

    function addFive(){
        setNumber(number + 5)
    }

    function resetToZero(){
        setNumber(0)
    }

    return(
        <div>
            <h1 className="head">{number}</h1>
            <button onClick={() =>addFive()}>Add</button>
            <button onClick={() =>resetToZero()}>Reset</button>
        </div>
    )
}

export default FunctionCounter;
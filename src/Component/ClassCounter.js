import React from "react"
import "../App.css"

class ClassCounter extends React.Component{
    constructor(){
        super()
        this.state = {count:0}
    }

    addFive(){
        this.setState({
           count: this.state.count + 5
        })
    }

    resetToZero(){
        this.setState({
            count: this.state.count = (0)
        })
    }


    render(){
        return (
        <div>
            <h1 className="steam">{this.state.count}</h1>
            <br/>
            <button onClick={() => this.addFive()}>Add</button>
            <button onClick={() => this.resetToZero()}>Reset</button>
        </div>
        )
    }
}
export default ClassCounter;
import React from "react"
import "./style.css"
import DiceBox from "./DiceBox"

class App extends React.Component {
    constructor() {
        super()
        this.state = {

            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0


        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {



        this.setState({
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: Math.floor(Math.random() * 6),
            num4: Math.floor(Math.random() * 6),
            num5: Math.floor(Math.random() * 6),

        })
    }



    render() {


        return (
            <div>
                <DiceBox number={this.state.num1} />
                <DiceBox number={this.state.num2} />
                <DiceBox number={this.state.num3} />
                <DiceBox number={this.state.num4} />
                <DiceBox number={this.state.num5} />
                <button onClick={this.handleClick}>Roll the Dice</button>
            </div>

        )
    }
}


export default App
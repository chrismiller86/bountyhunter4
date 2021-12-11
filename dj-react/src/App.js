import React from "react"
import Box from "./Box.js"
import "./style.css"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)

    }



    handleClick() {
        console.log("clicked")
        if (this.state.colors[0] === "white") {
            this.setState(prevState => {
                return {
                    colors: ["black", "black", "black", "black"]
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            })
        }
    }

    handleClick2() {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", { prevState }, { prevState }]
            }
        })
    }

    handleClick3() {
        this.setState(prevState => {
            return {
                colors: [{ prevState }, { prevState }, "blue", { prevState }]
            }
        })
    }

    handleClick4() {
        this.setState(prevState => {
            return {
                colors: [{ prevState }, { prevState }, { prevState }, "blue"]
            }
        })
    }


    render() {

        return (
            <div className="container">
                <Box color={this.state.colors[0]} />
                <Box color={this.state.colors[1]} />
                <Box color={this.state.colors[2]} />
                <Box color={this.state.colors[3]} />
                <button className="smallButton" onClick={this.handleClick}>Small Time</button>
                <button className="partyButton" onClick={this.handleClick2}>Party DJ</button>
                <button className="leftBlue" onClick={this.handleClick3}>Left Blue</button>
                <button className="rightBlue" onClick={this.handleClick4}>Right Blue</button>





            </div>
        )
    }
}

export default App

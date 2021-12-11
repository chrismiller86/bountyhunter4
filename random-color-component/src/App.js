import React, { Component } from "react"


class App extends Component {
    constructor() {
        super()
        this.state = {
            color: ""
        }
    }

    componentDidMount = () => {
        fetch('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    color: data.new_color
                })
            })
    }

    render() {
        return (
            <div style={{ width: 300, height: 300, backgroundColor: ["#" + this.state.color] }}></div >
        )
    }
}

export default App
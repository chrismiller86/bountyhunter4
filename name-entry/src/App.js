
import React from "react"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    // handleClick(e) {
    //     e.preventDefault()
    //     this.setState({
    //         nameList: [this.state.name]
    //     })


    // }

    handleClick(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                name: "",
                nameList: [...prevState.nameList, this.state.name]
            }
        })
    }



    render() {

        const listOfNames = this.state.nameList.map(function (item) {
            return (
                <li>{item}</li>
            )
        })


        return (
            <main>
                <form>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                    <h1>{this.state.name}</h1>
                    <button onClick={this.handleClick}>Submit</button>
                    <ul>{listOfNames}</ul>
                </form >
            </main>
        )
    }
}


export default App
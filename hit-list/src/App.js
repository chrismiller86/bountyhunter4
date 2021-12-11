import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            hitList: []

        }
    }
    componentDidMount() {
        this.setState()
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    hitList: data
                })
            })


    }

    render() {

        const names = this.state.hitList.map((individual) => {
            return (
                <div>
                    <p>{individual.name}</p>
                    <img src={individual.image} width="500px" height="500px"></img>


                </div>
            )
        })

        return (
            <div>
                {names}
            </div>

        )
    }

}

export default App
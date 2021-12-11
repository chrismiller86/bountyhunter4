import React from "react"
import Badge from "./Badge"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favFood: "",
            infoBox: "",
            badgeList: [],



        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }




    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {




            return {

                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phoneNumber: "",
                favFood: "",
                infoBox: "",

                badgeList: [
                    ...prevState.badgeList,
                    <Badge
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        placeOfBirth={this.state.placeOfBirth}
                        phoneNumber={this.state.phoneNumber}
                        favFood={this.state.favFood}
                        infoBox={this.state.infoBox}
                    />
                    // this.state.firstName,
                    // this.state.lastName,
                    // this.state.email,
                    // this.state.phoneNumber,
                    // this.state.placeOfBirth,
                    // this.state.favFood,
                    // this.state.infoBox,

                ]


            }

        })


    }








    render() {

        const newBadge = this.state.badgeList.map(function (item) {
            return (

                item
            )
        })


        return (
            <main>
                <form id="form">
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                        minLength="3"

                    />

                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        minLength="3"
                        required

                    />

                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        placeholder="Email Address"
                        onChange={this.handleChange}
                        minLength="3"
                        required

                    />

                    <input
                        name="placeOfBirth"
                        type="text"
                        value={this.state.placeOfBirth}
                        placeholder="Place of Birth"
                        onChange={this.handleChange}
                        minLength="3"
                        required

                    />

                    <input
                        name="phoneNumber"
                        type="number"
                        pattern="[0-9]+"
                        value={this.state.phoneNumber}
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        name="favFood"
                        type="text"
                        value={this.state.favFood}
                        placeholder="Favorite Food"
                        onChange={this.handleChange}
                        minLength="3"
                        required

                    />

                    <input
                        name="infoBox"
                        type="text"
                        value={this.state.infoBox}
                        placeholder="Tell us about yourself"
                        onChange={this.handleChange}
                        minLength="3"
                        required

                    />

                    <button onClick={this.handleSubmit}>Submit</button>
                </form>


                <div>{newBadge}</div>




            </main>

        )
    }

}



export default App


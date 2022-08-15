import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function Form() {

    const { handleChange, handleClick, coordinates } = useContext(ThemeContext)

    const style = {
        marginLeft: 400
    }



    return (
        <form style={style}>
            Latitude: <input

                type="text"
                name="latitude"
                onChange={handleChange}
                value={coordinates.latitude}
            />
            Longitude: <input
                type="text"
                name="longitude"
                onChange={handleChange}
                value={coordinates.longitude}
            />
            <br />
            <button onClick={handleClick}>Submit</button>
        </form >
    )
}

export default Form
import React, { useContext } from "react"
import Form from "./Form"
import { ThemeContext } from "./themeContext"

function Wind() {

    const { windDirection, windSpeed } = useContext(ThemeContext)

    const headingStyle = {
        textAlign: "center"

    }

    return (
        <>
            <h1 style={headingStyle}>Wind</h1>
            <Form />
            <br />
            <div style={headingStyle}>Wind Direction: {windDirection}</div>
            <br />
            <div style={headingStyle}>Wind Speed: {windSpeed}</div>
        </>
    )
}

export default Wind
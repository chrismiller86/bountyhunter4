import React, { useContext } from "react"
import Form from "./Form"
import { ThemeContext } from "./themeContext"

function Weather() {

    const { temperature, shortForecast } = useContext(ThemeContext)

    const headingStyle = {
        textAlign: "center"

    }


    return (
        <>
            <h1 style={headingStyle}>Weather</h1>
            <Form />
            <br />
            <div style={headingStyle}>Current Temperature: {temperature}</div>
            <br />
            <div style={headingStyle}>Forecast: {shortForecast}</div>

        </>
    )
}

export default Weather



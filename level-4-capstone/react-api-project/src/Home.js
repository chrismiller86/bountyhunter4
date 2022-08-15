import React from "react";

function Home() {

    const imageStyle = {
        padding: 0,
        height: 500,
        width: "100%",
    }

    const headingStyle = {
        textAlign: "center"

    }

    return (
        <>
            <h1 style={headingStyle}>Home</h1>
            <img src="https://www.carvemag.com/wp-content/uploads/2016/03/Press-7.jpg" alt="surfer" style={imageStyle} />

        </>
    )
}

export default Home
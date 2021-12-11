import React from "react"
import ReactDOM from "react-dom"

import BlogList from "./BlogList"
import Header from "./Header"
import Footer from "./Footer"

ReactDOM.render(
    <div>
        <Header />
        <BlogList />
        <Footer />
    </div>,
    document.getElementById("root"))
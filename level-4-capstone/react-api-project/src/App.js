import React from "react"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Wind from "./Wind"
import Weather from "./Weather"
import Home from "./Home"
import { ThemeContextProvider } from "./themeContext";


function App() {

  return (
    <ThemeContextProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/wind">Wind</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wind" element={<Wind />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  )
}

export default App
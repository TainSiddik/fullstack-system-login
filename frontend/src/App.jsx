import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Backgorund from "./components/bg/Backgound"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Backgorund><Login /></Backgorund>} />
                <Route path="/register" element={<Backgorund><Register /></Backgorund>} />
            </Routes>
        </Router>
    )
}
export default App
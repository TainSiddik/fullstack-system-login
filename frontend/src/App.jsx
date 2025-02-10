import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Backgorund from "./components/bg/Backgound"
import Sidebar from "./components/dashboard/Sidebar"
import Navbar from "./components/dashboard/Navbar"
import Content from "./components/dashboard/Content"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Backgorund><Login /></Backgorund>} />
                <Route path="/register" element={<Backgorund><Register /></Backgorund>} />
                <Route path="/dashboard" element={
                    <div className="flex gap-2">
                        <div className="sidebar my-2">
                            <Sidebar />
                        </div>
                        <div className="nav-content my-2 flex-1 pr-1">
                            <div className="navbar">
                                <Navbar />
                            </div>
                            <div className="content mt-2">
                                <Content />
                            </div>
                        </div>
                    </div>
                } />

            </Routes>
        </Router>
    )
}
export default App
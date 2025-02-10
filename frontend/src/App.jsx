import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Backgorund from "./components/bg/Backgound"
import Sidebar from "./components/dashboard/Sidebar"
import Navbar from "./components/dashboard/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import Users from "./components/dashboard/Users"
import Products from "./components/dashboard/Products"
import Footer from "./components/footer/footer"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Backgorund><Login /></Backgorund>} />
                <Route path="/register" element={<Backgorund><Register /></Backgorund>} />
                <Route path="/users" element={
                    <>
                        <div className="flex gap-2">
                            <div className="sidebar my-2">
                                <Sidebar />
                            </div>
                            <div className="nav-content my-2 flex-1 pr-1">
                                <div className="navbar">
                                    <Navbar />
                                </div>
                                <div className="content mt-2">
                                    <Users />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Footer />
                        </div>
                    </>
                } />
                <Route path="/products" element={
                    <>
                        <div className="flex gap-2">
                            <div className="sidebar my-2">
                                <Sidebar />
                            </div>
                            <div className="nav-content my-2 flex-1 pr-1">
                                <div className="navbar">
                                    <Navbar />
                                </div>
                                <div className="content mt-2">
                                    <Products />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <Footer />
                        </div>
                    </>
                } />
                <Route path="/dashboard" element={
                    <>
                        <div className="flex gap-2">
                            <div className="sidebar my-2">
                                <Sidebar />
                            </div>
                            <div className="nav-content my-2 flex-1 pr-1">
                                <div className="navbar">
                                    <Navbar />
                                </div>
                                <div className="content mt-2">
                                    <Dashboard />
                                </div>
                            </div>
                        </div>
                        <div className="footer mx-1">
                            <Footer />
                        </div>
                    </>
                } />
            </Routes>
        </Router>
    )
}
export default App
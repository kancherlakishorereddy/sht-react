import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="/">Support HashTag</Link>

            <div className="navbar-nav text-center ml-auto" id="navbarColor01">
                <div className="d-flex flex-row flex-nowrap justify-content-around text-center">
                    <div className="nav-item">
                        <NavLink className="nav-link mx-3" to="/trends">Trends</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className="nav-link mx-3" to="/tweets">Tweets</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )
}

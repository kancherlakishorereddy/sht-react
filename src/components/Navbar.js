import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="/">Support HashTag</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav text-center ml-auto">
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/trends">Trends</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link" to="/tweets">Tweets</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

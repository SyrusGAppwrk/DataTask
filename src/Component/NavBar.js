import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Resource Manager</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Development">
                                Development
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Designing">
                                Designing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Contentteam">
                                Content Team
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Digitalteam">
                                Digital Team
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Contractors">
                                Contractors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="QATeam">
                                QA Team
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav >

    )
}

export default NavBar
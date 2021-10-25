import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                <Link to="/" className="nav-link">
                    Projeto Fullstack
                </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to="/cadastro" className="nav-link">
                            Cadastro
                        </Link>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default Header;
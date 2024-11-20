import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-center bg-light navbar-light border-bottom border-body">
            <div className="container-fluid">
                <a className="navbar-brand text-black-50" href="#">RAWAYANA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse text-light" id="navbarNav">
                    <ul className="navbar-nav">
                     <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
            </div>
         </nav>
    );
};
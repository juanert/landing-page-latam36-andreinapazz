import React from 'react';

export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg text-center">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                <a className="navbar-brand align-items-center" href="#">
                    <img className="object-cover object-center logo-home" 
                    src="https://res.cloudinary.com/dj6gqmozm/image/upload/f_auto,q_auto/nqyo2gpte9c8kwsgqlbn" alt="logo-culturalWave"></img>
                </a>
                </div>
                
                <div className= "d-flex justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="categoria-navbar collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Conciertos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Teatro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Museos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Infantil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Turismo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vida Nocturna</a>
                        </li>
                        </ul>
                        </div>
                    </div>
                    
                    <div>
                    <button className="button-17" type="button">
                            <span href="#">Iniciar Sesion</span>
                    </button>
                    </div>
            </div>
          </nav>
         
    );
};
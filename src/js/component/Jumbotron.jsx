import React from 'react';

export const Jumbotron = () => {
    return(
        <div className="jumbotron-fluid container-fluid p-5 bg-light rounded-2">
            <h1 className="display-4">Bienvenidos amantes de Rawayana!</h1>
            <p className="lead">¿Quién trae las cornetas? New Album</p>
            <hr className="my-4"/>
            <p> Originarios de Venezuela, se han convertido en uno de las bandas más emocionantes de 
                Latinoamérica con su espectáculo en vivo de gran energia y su distintiva fusión de reggae, funk, soul, rock y ritmos caribeños.</p>
            <a className="btn btn-info  btn-lg" href="#" role="button">Ver Albumes</a>
        </div>
    );
};
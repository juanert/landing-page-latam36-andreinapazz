import React from 'react';

export const Card = (props) => {
    return (
        
    <div className="col-12 col-sm-6 col-lg-3 p-5">
        <div className="card h-100">
            <img src={props.imagen} className="card-img-top" style={{height: '400px', objectFit: 'cover'}} alt={props.titulo}/>
            <div className="card-body">
             <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text text-center">{props.descripcion}</p>
             <div className='d-flex justify-content-center'>
                <a href="#" className="btn btn-info ">Click aca para mas informacion</a>
            </div>
            </div>
        </div>
    </div>
    );
};
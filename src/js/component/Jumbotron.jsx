import React from 'react';

export const Jumbotron = () => {
    return(
        <div className="col-12 col-sm-6 col-lg-6 p-5 d-flex">
            <div className="jumbotron-fluid container-fluid slogan">
                <img className='slogan-png' src='https://res.cloudinary.com/dijfzjssm/image/upload/v1734509652/BOCETOS_INTERFAZ_ANDREINA-10_aqzcje.png' alt='slogan-culturalWave'>
                </img>
            </div>
                
              <div className="publica-seccion">
                    <div className="publica-text">
                        <p>Publica tu evento</p>
                    </div> 
                        <div>
                        <button className="button-61" type="button">
                                    <span href="#">Click aca</span>
                        </button> 
                        </div>
              </div>
                
    
        </div>
    );
};
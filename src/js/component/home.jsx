import React from "react";

//componentes
import {Navbar} from "./Navbar";
import {Jumbotron} from "./Jumbotron";
import {Card} from "./Card";
import {Footer} from "./Footer";




const Home = () => {
	return (
		<div className="container-fluid">
			<div>
				<Navbar/>
			</div>
				<Jumbotron/>
			<div className="row row-cols-1 row-cols-md-4 g-4">
					<Card
                        imagen="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e3/48/bb/e348bb56-d21d-2dc0-f69b-e0a04560d624/645789123559.jpg/1200x1200bf-60.jpg"
                        titulo="Trippy Caribbean (Vinyl)"
                        descripcion="Trippy Caribbean es el tercer trabajo discográfico de la banda de reggae Venezolana, Rawayana. Lanzado en 2016."
                        
                    />
                    <Card
                        imagen="https://www.morediscos.com/cdn/shop/products/Rawayanaland.jpg?v=1679444333"
                        titulo="RawayanaLand (Vinyl)"
                        descripcion="Rawayanaland es el segundo álbum de estudio de la banda venezolana de reggae Rawayana lanzado en 2013."
                        
                    />
                    <Card
                        imagen="https://images.genius.com/c1fd361f70dc88a7b84a1368ae4eb4c7.1000x1000x1.png"
                        titulo="Cuando Los Acéfalos Predominan (Vinyl)"
                        descripcion="Cuando Los Acéfalos Predominan es el cuarto álbum de estudio de la banda venezolana, estrenado en el año 2021."
                        
                    />
                    <Card
                        imagen="https://pbs.twimg.com/media/GKvWuAfWQAAAF-g.jpg:large"
                        titulo="¿Quién trae las cornetas? New Album"
                        descripcion="La banda más boleta de Venezuela, cierra su ciclo ¿Quién trae las cornetas? tras su exitosa gira."
                        
                    />
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;

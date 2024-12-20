import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <Link to={"/eventos/crear"}>
        <button>Crear tu evento</button>
      </Link>
    </div>
  );
}

export default Home;

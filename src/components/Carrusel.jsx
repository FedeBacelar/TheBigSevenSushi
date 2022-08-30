import React from "react";
import Producto from './Producto';
function Carrusel({MoverCarrusel}){
    return(
        <div className="Carta__Contenedor__Opciones">
            <h2 className="Carta__Contenedor__Opciones__Titulo">Maki</h2>
            <section className="Carta__Contenedor__Opciones__Carrusel">
                <article className="Carta__Contenedor__Opciones__Carrusel__Article" id="article1"> <Producto/> <Producto/> <Producto/></article>
                <article className="Carta__Contenedor__Opciones__Carrusel__Article" id="article2"> <Producto/> <Producto/> <Producto/> </article>
                <article className="Carta__Contenedor__Opciones__Carrusel__Article" id="article3"> <Producto/> <Producto/> <Producto/> </article>
            </section>
            <ul className="Carta__Contenedor__Opciones__ControlCarrusel">
                <li className="Carta__Contenedor__Opciones__ControlCarrusel__Punto active" onClick={() => MoverCarrusel(0)}></li>
                <li className="Carta__Contenedor__Opciones__ControlCarrusel__Punto" onClick={() => MoverCarrusel(1)}></li>
                <li className="Carta__Contenedor__Opciones__ControlCarrusel__Punto" onClick={() => MoverCarrusel(2)}></li>
            </ul>

        </div>
    )
}


export default Carrusel;
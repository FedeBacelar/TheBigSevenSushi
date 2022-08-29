import React from "react";
import Producto from './Producto';
function Carrusel({MoverCarrusel}){
    return(
        <div className="Carta__Contenedor__Carrusel">

            <div className="Carta__Contenedor__Carrusel__Secciones">

                <h2 className="Carta__Contenedor__Carrusel__Secciones__Titulo">URAMAKI</h2>
                <div className="Carta__Contenedor__Carrusel__Secciones__ContenedorSecciones">
                    <section className="Carta__Contenedor__Carrusel__Secciones__ContenedorSecciones__Seccion" id="SeccionCarrusel1">
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                    </section>
                    <section className="Carta__Contenedor__Carrusel__Secciones__ContenedorSecciones__Seccion" id="SeccionCarrusel2">
                    <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                    </section>
                    <section className="Carta__Contenedor__Carrusel__Secciones__ContenedorSecciones__Seccion" id="SeccionCarrusel3">
                    <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                        <Producto
                        nombre={"Titulo"}
                        descripcion = {"Esta es una descripcion de prueba para saber como queda el responsive"}
                        precio={700} />
                    </section>
                </div>
            </div>
            <ul className="Carta__Contenedor__Carrusel__Navegacion">
                <li className="Carta__Contenedor__Carrusel__Navegacion__Punto active" onClick={() => MoverCarrusel("Seccion1")}></li>
                <li className="Carta__Contenedor__Carrusel__Navegacion__Punto" onClick={() => MoverCarrusel("Seccion2")}></li>
                <li className="Carta__Contenedor__Carrusel__Navegacion__Punto" onClick={() => MoverCarrusel("Seccion3")}></li>
            </ul>
        </div>
    )
}


export default Carrusel;
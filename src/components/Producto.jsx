import React from "react";

function Producto({ nombre, precio, descripcion, }){
    return (
        <article className="Carta__Contenedor__Producto">
            <div className="Carta__Contenedor__Producto__Contenedor">
                <img className="Carta__Contenedor__Producto__Contenedor__Imagen" src= {require("../Imgs/CartaPrueba.png")}/>
            </div>
            <h2 className="Carta__Contenedor__Producto__Titulo">{nombre}</h2>
            <h2 className="Carta__Contenedor__Producto__Precio">${precio}</h2>
            <p className="Carta__Contenedor__Producto__Parrafo">{descripcion}</p>
            <div className="Carta__Contenedor__Producto__Encargar">Encargar</div>
        </article>
    )
}

export default Producto;
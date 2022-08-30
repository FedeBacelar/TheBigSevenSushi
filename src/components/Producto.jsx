import React from "react";

function Producto({ nombre, precio, descripcion, }){
    return (
        <article className="Producto">
            <div className="Producto__Contenedor">
                <img className="Producto__Contenedor__Imagen" src= {require("../Imgs/CartaPrueba.png")}/>
            </div>
            <h2 className="Producto__Titulo" >{nombre}</h2>
            <h2 className="Producto__Precio">${precio}</h2>
            <p className="Producto__Parrafo">{descripcion}</p>
            <a className="Producto__Encargar" target= "_blank" href={`https://api.whatsapp.com/send?phone=541134597072&text=${"Hola,%20¿Qué%20tal%20estás?"}`}>Encargar</a>
        </article>
    )
}

export default Producto;
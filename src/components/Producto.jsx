import React from "react";

function Producto({ nombre, precio, descripcion, eventAbrirPedido, eventAsignarPrecio}){
    return (
        <div className="Producto">
            <div className="Producto__Contenedor">
                <img className="Producto__Contenedor__Imagen" src= {require("../Imgs/CartaPrueba.png")}/>
            </div>
            <h2 className="Producto__Titulo" >{nombre}</h2>
            <h2 className="Producto__Precio">${precio}</h2>
            <p className="Producto__Parrafo">{descripcion}</p>
            <div className="Producto__Encargar" target= "_blank" onClick={() => {eventAbrirPedido(precio, nombre)}}>Encargar</div>
        </div>
    )
}

export default Producto;

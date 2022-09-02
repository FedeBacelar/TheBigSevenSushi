import React from "react";
import { AiOutlineCloseCircle, AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

function Pedidos({ visible, cantidad, precio, producto, eventCerrarPedido, eventSumarCantidad, eventRestarCantidad }){
    return(
        <div className= {`Pedido ` + (visible? '' : 'invisible')}>
            <AiOutlineCloseCircle className="Pedido__Close" onClick={eventCerrarPedido}/>
            <h1 className="Pedido__Titulo">Personaliza tu pedido!</h1>
            <div className="Pedido__Informacion">
                <div className="Pedido__Informacion__Contenedor">
                    <img src = {require("../Imgs/CartaPrueba.png")} className="Pedido__Informacion__Contenedor__Imagen"/>
                </div>
                <div className="Pedido__Informacion__Caracteristicas">
                    <h2 className="Pedido__Informacion__Caracteristicas__Titulo">{producto}</h2>
                    <div className="Pedido__Informacion__Caracteristicas__Contenedor">
                        <h2 className="Pedido__Informacion__Caracteristicas__Contenedor__Precio">{precio*cantidad/8}</h2>
                        <div className="Pedido__Informacion__Caracteristicas__Contenedor__Calculo">
                            <AiOutlineMinus className="Pedido__Informacion__Caracteristicas__Contenedor__Calculo__Restar" onClick={eventRestarCantidad}/>
                            <span className="Pedido__Informacion__Caracteristicas__Contenedor__Calculo__Asignar">{cantidad}</span>
                            <AiOutlinePlus className="Pedido__Informacion__Caracteristicas__Contenedor__Calculo__Sumar" onClick={eventSumarCantidad}/>
                        </div>
                    </div>
                </div>
            </div>
            <a 
            href={`https://api.whatsapp.com/send?phone=541134597072&text=Hola,%20Me%20Gustaria%20Pedir%20${cantidad}%20piezas%20de%20${producto}%20a%20un%20total%20de%20${precio*cantidad/8}`} 
            target="_Blank"
            className="Pedido__Pedir no-seleccionable">Encargar por WhatsApp</a>
        </div>
    )
}

export default Pedidos;
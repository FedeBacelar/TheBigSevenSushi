import React from "react";

function Pedidos({ visible }){
    return(
        <div className= {`Pedido ` + (visible? '' : 'invisible')}>
            <h1 className="Pedido__Titutlo">Personaliza tu pedido!</h1>
        </div>
    )
}

export default Pedidos;
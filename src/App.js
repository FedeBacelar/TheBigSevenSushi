import './App.css';
import Pedidos from './components/Pedido';
import Producto from './components/Producto';
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
function App() {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState(0)
  const [cantidad, setCantidad] = useState(8);
  const sumarCantidad = () => { 
    setCantidad(cantidad + 4)
  }
  const restarCantidad = () => { 
    cantidad > 4 ? setCantidad(cantidad - 4) : setCantidad(4)

  }


  const [visible, setVisible] = useState(false);
  const abrirPedido = (precio,producto) => {
    setVisible(true)
    setPrecio(precio)
    setProducto(producto)
  }
  const cerrarPedido = () => {
    setVisible(false)
    setCantidad(8)
    setProducto('')
  }

  return (
    <div className="App">
      <header className='Header'>
        <h1 className='Header__TituloPrincipal'>THE BIG SEVEN</h1>
        <h2 className='Header__TituloSecundario'>SUSHI</h2>
      </header>
      <Pedidos
      visible={visible}
      cantidad = {cantidad}
      precio = {precio}
      producto = {producto}
      eventCerrarPedido = {cerrarPedido}
      eventSumarCantidad = {sumarCantidad}
      eventRestarCantidad = {restarCantidad}/>
      <section className='Inicio'>
        <article className='Inicio__Contenedor'>
          <img 
          src={require('./Imgs/SevenSushiLogo.png')} 
          alt="Logo de 'Big Seven Sushi'" 
          className='Inicio__Contenedor__Imagen' />
        </article>
      </section>
      <section className='Carta'>
        <article className='Carta__Cabecera'>
          <div className='Carta__Cabecera__Contenedor'>
            <img 
            className='Carta__Cabecera__Contenedor__Imagen'
            src= {require('./Imgs/SevenSushiLogo.png')}
            alt="Logo de 'Big Seven Sushi'" />
          </div>
          <h1 className='Carta__Cabecera__Titulo'>CARTA DELIVERY {"&"} TAKEAWAY</h1>
        </article>
        <article className='Carta__Contenedor'>
          <section className='Carta__Contenedor__Seccion'>
              <h2 className='Carta__Contenedor__Seccion__Titulo'>Nuestros Makis<AiFillCaretRight/></h2>
            <div className='Carta__Contenedor__Seccion__Contenedor'>
              <Producto
              nombre={'Producto 1'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 2'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 3'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 4'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
            </div>  
          </section>

          <section className='Carta__Contenedor__Seccion'>
              <h2 className='Carta__Contenedor__Seccion__Titulo'>Nuestros Uramakis<AiFillCaretRight/></h2>
            <div className='Carta__Contenedor__Seccion__Contenedor'>
            <Producto
              nombre={'Producto 5'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 6'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 7'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 8'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
            </div>  
          </section>

          <section className='Carta__Contenedor__Seccion'>
              <h2 className='Carta__Contenedor__Seccion__Titulo'>Nuestros Nigiris<AiFillCaretRight/></h2>
            <div className='Carta__Contenedor__Seccion__Contenedor'>
            <Producto
              nombre={'Producto 9'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 10'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 11'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
              <Producto
              nombre={'Producto 12'}
              precio = {700}
              descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"}
              eventAbrirPedido = {abrirPedido}/>
            </div>  
          </section>
        </article>
      </section>

    </div>
  );
}


export default App;

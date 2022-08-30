import './App.css';
import Carrusel from './components/Carrusel';
import Producto from './components/Producto';

function App() {

  const MoverCarrusel = (Posicion) =>{
    const Carrusel = document.querySelector(".Carta__Contenedor__Opciones__Carrusel")
    const Control = document.querySelectorAll(".Carta__Contenedor__Opciones__ControlCarrusel__Punto")
    Control.forEach(Punto => {
      Punto.style.backgroundColor = 'white';
    })
    Control[Posicion].style.backgroundColor = 'black';
    Carrusel.style.transform = `translateX(${Posicion*-33.33}%)`

  }

  return (
    <div className="App">
      <header className='Header'>
        <h1 className='Header__TituloPrincipal'>THE BIG SEVEN</h1>
        <h2 className='Header__TituloSecundario'>SUSHI</h2>
      </header>
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
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
          <Producto
          nombre={'NOMBRE'}
          precio = {'PRECIO'}
          descripcion = {"Descripcion muy larga sobre los productos para poder adaptarlo a la web"} />
        </article>
      </section>

    </div>
  );
}


export default App;

import './App.css';
import Carrusel from './components/Carrusel';

function App() {

  const eventMoverCarrusel = (Seccion) =>{
    const divCarrusel = document.querySelector(".Carta__Contenedor__Carrusel__Secciones__ContenedorSecciones");
    const Navegacion = document.querySelectorAll(".Carta__Contenedor__Carrusel__Navegacion__Punto");

    Navegacion.forEach((Punto) =>{
      Punto.style.backgroundColor = "aliceblue";
    })
    if(Seccion === 'Seccion1'){
      divCarrusel.style.transform = "translateX(0%)"
      Navegacion[0].style.backgroundColor = "#D6BE74";
      console.log('click 1')
    } else if(Seccion === 'Seccion2'){
      divCarrusel.style.transform = "translateX(-33.33%)"
      Navegacion[1].style.backgroundColor = "#D6BE74";
      console.log('click 2')
    } else{
      divCarrusel.style.transform = "translateX(-66.66%)"
      Navegacion[2].style.backgroundColor = "#D6BE74";
      console.log('click 3')
    }
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
        <div className='Carta__Contenedor'>
          <Carrusel
          MoverCarrusel={eventMoverCarrusel} />
        </div>
      </section>

    </div>
  );
}


export default App;

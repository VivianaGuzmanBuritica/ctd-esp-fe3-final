import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} =  useContextGlobal()
  console.log(themeState)

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
   
  }


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favoritos</h3></Link>
      <Link to='/contact'><h3>Contacto</h3></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme} className='theme'>{themeState.theme ? '☀️' : '🌘'}</button>
    </nav>
  )
}

export default Navbar


import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


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
      <div className='logoDh'>
        <img src="../DH.ico" alt='DH-logo' width={40} height={40}/>
        <h3>Odonto</h3>
      </div>
      <div className='navLinks'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/favs'><h4>Favoritos</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <button onClick={switchTheme} className='theme'>{themeState.theme ? '☀️' : '🌘'}</button>
      </div>
    </nav>
  )
}

export default Navbar


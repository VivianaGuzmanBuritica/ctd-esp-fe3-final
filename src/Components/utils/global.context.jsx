import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const ContextGlobal = createContext(undefined)

const themes = {
  dark: {
      theme: true,
      bgColor: 'black',
      color: 'white'
  },
  light: {
      theme: false,
      bgColor: 'white',
      color: 'black'
  }
}

const intialThemeState = themes.light

const themeReducer = (state, action) => {
  switch(action.type){
      case 'SWITCH_DARK':
          return themes.dark
      case 'SWITCH_LIGHT':
          return themes.light
      default:
          throw new Error
  }
}

export const ContextProvider = ({ children }) => {

  const [themeState, themeDispatch] = useReducer(themeReducer, intialThemeState)  

  const [userList, setUserList] = useState([]);

 
  const fetchUser = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setUserList(data)
  } 
  useEffect(() => {
    fetchUser()
    }, [])

  
  return (
    <ContextGlobal.Provider value={{userList, setUserList, themeState, themeDispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export const useContextGlobal = () => useContext(ContextGlobal)
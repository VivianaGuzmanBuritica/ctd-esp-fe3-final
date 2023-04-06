import { createContext, useContext, useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined)

  export const ContextProvider = ({ children }) => {

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
    <ContextGlobal.Provider value={{userList, setUserList}}>
      {children}
    </ContextGlobal.Provider>
  )
}



export const useContextGlobal = () => useContext(ContextGlobal)
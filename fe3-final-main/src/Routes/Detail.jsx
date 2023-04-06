import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const {name, email, id, phone, website} = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState({})
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data =>setUser(data))
   
  }, [])
  return (
    <>
      <h1>Detail Dentist id {user.id} </h1>
      <img src="/images/doctor.jpg" alt="doctor" width={200}/>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
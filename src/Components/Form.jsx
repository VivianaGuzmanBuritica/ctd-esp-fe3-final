import React from "react";
import { useState } from 'react'


const Form = () => {
 
  const[user, setUser]=useState({
    nombre:"",
    email:""

})
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const [show, setShow]=useState(false)
const[err, setErr]=useState(false)

const handleSubmit=(event)=>{
    event.preventDefault()

    if( user.nombre.length >= 5 && regexEmail.test(user.email) ){
        setShow(true)
        setErr(false)
    }else {
        setShow(false)
        setErr(true)
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Nombre completo" type="text" onChange={(e)=> setUser({...user, nombre: e.target.value})}></input>
        <input placeholder="Email" type="email" onChange={(e)=> setUser({...user, email: e.target.value})}></input>
        <button>Enviar</button>
      </form>
      {err && <p className='err'>Por favor chequea que la información sea correcta</p>}
      {show && <p>Gracias {user.nombre} te contactaremos cuanto antes via email</p>}
    </div>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import  '../Routes/favs.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

     const favs =  JSON.parse(localStorage.getItem('favs'))
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">  
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
 
        {favs.map(user =><Card id={user.id} name={user.name} username={user.username}/>)}
      
      </div>
    </>
  );
};

export default Favs;

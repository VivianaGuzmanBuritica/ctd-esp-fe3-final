import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import  '../Routes/favs.css';

const Favs = () => {

     const favs =  JSON.parse(localStorage.getItem('favs'))
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">  
        {favs.map(user =><Card id={user.id} name={user.name} username={user.username}/>)}
      </div>
    </>
  );
};

export default Favs;

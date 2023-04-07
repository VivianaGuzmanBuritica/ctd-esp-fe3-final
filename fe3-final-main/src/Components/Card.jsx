import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
 
    const {userList} = useContextGlobal();

    let favs = JSON.parse(localStorage.getItem('favs'))
    console.log(favs);
   
    const addFav = ()=>{

      let user= userList.filter(user => user.id == id)
     
      if(favs){
        favs = [...favs, user[0]]
   
      }else{ 
        favs = [user[0]]
      }

    localStorage.setItem('favs', JSON.stringify(favs))
  }


  return (
    <div className="card">
       
      <Link to={'/user/' + id} key= {id}>
        <img src="./images/doctor.jpg" alt="doctor" width={200}/>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>

        <button onClick={addFav} className="favButton hiddenButton">Add fav ✨</button>
    </div>
  );
};

export default Card;

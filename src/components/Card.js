import React from "react";
import { Link } from "react-router-dom";

function Card( {name, nickName, type, image, id, onDeletePokemon, onCardEdit, pokemonAllData} ){

    function handleDeletePokemon(){
        onDeletePokemon(id);

        fetch(`http://localhost:4000/pokemon/${id}`, {
            method: "DELETE"
        })
    }

    const handleEditClick = () => {
        onCardEdit(pokemonAllData);
      };

    return(
        <div className="card">
            <h3>{name}</h3>
            <p>Name: {nickName}</p>
            <p>Type: {type}</p>
            <img className="cardImg" src={image}></img>
            <button className="button" onClick={handleDeletePokemon}>{"Delete"}</button>
            <Link className="button" to={`/cards/${id}/edit`} onchandleEditClick={handleEditClick}>{"Change_Nickname"}</Link>
        </div>
    )
}

export default Card;
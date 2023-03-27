import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
    name: "",
    nickName: "",
    type: [],
    image: "",
  };

  const missingURL = "https://upload.wikimedia.org/wikipedia/commons/1/10/Large-x.png";

function Form( {onAddPokemon} ){

    const [formData, setFormData] = useState(initialState);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [foundPokemon, setFoundPokemon] = useState(false);

    const history = useHistory();

    //setting form data
    const handleOnChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData, [name]: value
        })

        //set pkmn search query to use in fetch to find their display image
        if(name === "name"){
            setSearchPokemon(e.target.value);
        }
    }

    function setFormItems(data){

        //create array of this pokemons type
        const pokeType = data.types.map( (poke)=>{
            return poke.type.name;
        })

        setFormData({
            ...formData, type: pokeType, image: data.sprites.other["official-artwork"].front_default
        })
    }

    //fetch request to pull image of pokemon
    useEffect( ()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`)
        .then( (res)=> res.json() )
        .then( (data)=> {
                    if( !(data.sprites === undefined) ) {
                        setImageURL(data.sprites.other["official-artwork"].front_default);
                        setFormItems(data);
                        setFoundPokemon(true);
                    } else
                        setFoundPokemon(false);
                })
    },[searchPokemon])

    function handleSubmit(e){
        e.preventDefault();

        //fetch request POST
        fetch("  http://localhost:4000/pokemon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        
        setFormData(initialState);
        onAddPokemon(formData);
        setSearchPokemon("");
        history.push("/cards");
    }

    return(
        <div class="grid-container">

            <div class="grid-item">
                <form className="formLeft" onSubmit={handleSubmit}>
                    <h3>Pokemon Search</h3>
                    <label>Pokemon</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="search..."
                        value={formData.name}
                        onChange={handleOnChange}
                    />
                    <label>Nick name</label>
                    <input 
                        type="text"
                        id="nickName"
                        name="nickName"
                        value={formData.nickName}
                        onChange={handleOnChange}
                    />
                    {foundPokemon ? <button type="submit">Add Pokemon</button> : null}
                </form>
            </div>

            <div class="grid-item">
                <img className="searchImage" src={ foundPokemon ? imageURL : missingURL}/>
            </div>

        </div>
    )
}

export default Form; 
import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';


import Form from './Form';
import CardsDisplay from './CardsDisplay';
import CardEditForm from "./CardEditForm";

function CardsContainer(){

    const [selectedType, setSelectedType] = useState("");
    const [cardCollection, setCardCollection] = useState([]);
    const [cardToEdit, setCardToEdit] = useState(null);

    //add in cards from db to collection
    useEffect( ()=>{
    let url;
    if(selectedType){
      console.log(selectedType)
      url = `http://localhost:4000/pokemon?type=${selectedType}`;
    } else {
      url = "http://localhost:4000/pokemon";
    }
    fetch(url)
    .catch( err => console.log(err.message) )
    .then( (res)=> res.json() )
    .then( (data)=>{
      setCardCollection(data);
    })
    },[selectedType]);



    function onAddPokemon(newPokemon) {
        setCardCollection([...cardCollection, newPokemon])
    }

    function onDeletePokemon(pokemonID) {
        let newCollection = cardCollection.filter( (pokemon)=>{
        return pokemon.id !== pokemonID;
    })
        setCardCollection(newCollection);
    }

    const onCompleteEditing = (updatedCard) => {
        setCardCollection( pokemon => pokemon.map( originalCards => {
          if (originalCards.id === updatedCard.id){
            return updatedCard;
          } else {
            return originalCards;
          }
        }));
        setCardToEdit(null);
      };


      const onCardEdit = (cardToUpdate) => {
        setCardToEdit(cardToUpdate);
      };



    return(
        <>
            <Switch>
                <Route  path="/cards/:id/edit">
                    <CardEditForm className="Form"
                    cardToEdit={cardToEdit}
                    onCompleteEditing={onCompleteEditing}
                    />
                </Route>

                <Route  path="/cards/add">
                    <Form className="Form" onAddPokemon={onAddPokemon} />
                </Route>

                <Route  path="/cards">
                    <CardsDisplay className="Form"
                        cardCollection={cardCollection}
                        onDeletePokemon={onDeletePokemon}
                        setSelectedType={setSelectedType}
                        onCardEdit={onCardEdit}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default CardsContainer;
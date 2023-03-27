import React, {useState} from "react";


import Card from "./Card";
import FilterButtons from "./FilterButtons";

function CardsDisplay( {cardCollection, onDeletePokemon, setSelectedType, onCardEdit} ){

    const [searchPokemon, setSearchPokemon] = useState("");

    const handlePKMNSearch = (e)=>{
        setSearchPokemon(e.target.value);
    }

    const allCards = cardCollection.map( (pokemon)=>{
        return(
            <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                nickName={pokemon.nickName}
                type={pokemon.type}
                image={pokemon.image}
                onDeletePokemon={onDeletePokemon}
                onCardEdit={onCardEdit}
                pokemonAllData={pokemon}
            />
        )
    })

    const filteredCards = allCards.filter( (card)=>{
        if(!searchPokemon){
            return card
        } else if (card.props.name.toLowerCase().includes(searchPokemon.toLowerCase())){
            return card;
        }
    })


    return(
        <div>
            <section>
                <FilterButtons setSelectedType={setSelectedType}/>
                <input
                    type="search"
                    onChange={handlePKMNSearch}
                    value={searchPokemon}
                    placeholder="search your collection..."
                />
            </section>

            <section className="cardsDisplay">
                {filteredCards}
            </section>
        </div>
    )
}

export default CardsDisplay;
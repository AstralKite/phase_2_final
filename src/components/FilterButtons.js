import React from "react";


function FilterButtons( {setSelectedType} ){
    return(
        <div className="filter">
            <button onClick={ ()=> setSelectedType("")          } id="all"        >All</button>
            <button onClick={ ()=> setSelectedType("normal")    } id="normal"     >Normal</button>
            <button onClick={ ()=> setSelectedType("fire")      } id="fire"       >Fire</button>
            <button onClick={ ()=> setSelectedType("grass")     } id="grass"      >Grass</button>
            <button onClick={ ()=> setSelectedType("water")     } id="water"      >Water</button>
            <button onClick={ ()=> setSelectedType("electric")  } id="electric"   >Electric</button>
            <button onClick={ ()=> setSelectedType("fighting")  } id="fighting"   >Fighting</button>
            <button onClick={ ()=> setSelectedType("psychic")   } id="psychic"    >Psychic</button>
            <button onClick={ ()=> setSelectedType("ice")       } id="ice"        >Ice</button>
            <button onClick={ ()=> setSelectedType("poison")    } id="poison"     >Poison</button>
            <button onClick={ ()=> setSelectedType("ground")    } id="ground"     >Ground</button>
            <button onClick={ ()=> setSelectedType("flying")    } id="flying"     >Flying</button>
            <button onClick={ ()=> setSelectedType("ghost")     } id="ghost"      >Ghost</button>
            <button onClick={ ()=> setSelectedType("rock")      } id="rock"       >Rock</button>
            <button onClick={ ()=> setSelectedType("dark")      } id="dark"       >Dark</button>
            <button onClick={ ()=> setSelectedType("steel")     } id="steel"      >Steel</button>
            <button onClick={ ()=> setSelectedType("fairy")     } id="fairy"      >Fairy</button>
            <button onClick={ ()=> setSelectedType("dragon")    } id="dragon"     >Dragon</button>
        </div>
    )
}

export default FilterButtons;
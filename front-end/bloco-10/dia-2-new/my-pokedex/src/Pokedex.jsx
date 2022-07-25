import React from "react";
import Pokemon from "./Pokemon";
// import data from "./data";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props
    return(
      <div>
        {pokemons.map((pokemon) => 
          <div>
            <Pokemon
              key={pokemon.id}
              pokemon={pokemon}           
            />
          </div>
        )}
       
      </div>
    )
  }
}

export default Pokedex;
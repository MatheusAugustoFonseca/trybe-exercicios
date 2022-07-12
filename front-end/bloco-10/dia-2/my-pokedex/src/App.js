import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

